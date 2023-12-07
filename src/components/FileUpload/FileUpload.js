import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const baseUrl = "https://s3-direct-upload-microservice-a2d4cfd91078.herokuapp.com"; // Replace with AWS deployment line for deployment checks 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if(!file) {
      alert("Please select a file");
      return;
    }
    // requests a presigned url from rails AWS microservice
    try {
      const presignedUrlResponse = await fetch(`${baseUrl}/create_presigned_url`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: file.name,
          type: file.type,
        })
      });

      const presignedUrlData = await presignedUrlResponse.json();
      // creates a form object and appends the file and url fields
      const formData = new FormData();
      Object.keys(presignedUrlData.fields).forEach(key => {
        formData.append(key, presignedUrlData.fields[key]);
      });
      formData.append("file", file);

      //  uploads the file to S3
      const s3UploadResponse = await fetch(presignedUrlData.url, {
        method: "POST",
        body: formData,
      });
      // notifies our microservice that the upload is complete
     if (s3UploadResponse.ok) {
      const uploadCompleteResponse = await fetch(`${baseUrl}/upload_complete`, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: file.name,
          s3_key: presignedUrlData.fields.key,
        })
      });
      // checks if the upload was successful if not throws an error
      if (uploadCompleteResponse.ok) {
        console.log('File uploaded successfully');
      } else {
        throw new Error('Failed to notify backend of upload completion');
      }
      } else {
        throw new Error('Failed to upload file to S3');
      }
    } catch (error) {
      console.error('Error uploading file', error); 
      console.log('Failed to upload file' + error.message);
    }
  };

  return (
    <div className="flex w-full mb-4">
      <div class="upload-file">
        <label for="formFile" class="form-label">Upload File</label>
        <input class="form-control" type="file" id="formFile" onChange={handleFileChange}/>
      </div>
      <div className="upload-file-btn flex items-end pb-2 ml-1 cursor-pointer" onClick={handleUpload}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />

        </svg>
      </div>
    </div>
  );
}

export default FileUpload;