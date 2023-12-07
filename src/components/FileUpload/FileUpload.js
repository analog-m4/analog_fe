import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const baseUrl = "https://localhost:3000/"; // Replace with AWS line for deployment checks 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if(!file) {
      alert("Please select a file");
      return;
    }

    try {
      const presignedUrlResponse = await fetch('${baseUrl}/create_presigned_url', {   // Add S3 API Gateway URL here
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

      const formData = new FormData();
      Object.entries(presignedUrlData.presignedUrlResponse.fields).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("file", file);

      const s3UploadResponse = await fetch(presignedUrlData.presignedUrlResponse.url, {
        method: "POST",
        body: formData,
      });

     if (!s3UploadResponse.ok) {
        throw new Error("Failed to upload file");
      }

      const uploadCompleteResponse = await fetch(`${baseUrl}/uploaded_complete`, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: file.name,
        })
      });

      if (!uploadCompleteResponse.ok) {
        throw new Error("Failed to upload file");
      }

      console.log("File upload successful");
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Upload Failed: " + error.message);
    }
  };

  return (
    <div className="flex w-full mb-4">
      <div class="upload-file">
        <label for="formFile" class="form-label">Upload File</label>
        <input class="form-control" type="file" id="formFile" onChange={handleFileChange}  />
      </div>
      <div className="upload-file-btn flex items-end pb-2 ml-1 cursor-pointer" onClick={handleUpload}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>
    </div>
  );
}

export default FileUpload;