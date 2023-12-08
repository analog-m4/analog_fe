import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const baseUrl = "https://s3-microservice-3d025e97e722.herokuapp.com"; // Replace with AWS deployment line for deployment checks

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }
    // requests a presigned url from rails AWS microservice
    // request to microservice
    try {
      const presignedUrlResponse = await fetch(
        `${baseUrl}/create_presigned_url?file_name=${file.name}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      const presignedUrlData = await presignedUrlResponse.json();
      // creates a form object and appends the file
      const formData = new FormData();
      formData.append("file", file);

      //  uploads the file to S3 with our presigned_url to S3
      const s3UploadResponse = await fetch(presignedUrlData.presigned_url, {
        method: "PUT",
        body: file,
      });
      // url

      // notifies our microservice that the upload is complete
      if (s3UploadResponse.ok) {
        const uploadCompleteResponse = await fetch(
          `${baseUrl}/upload_complete`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              file_name: file.name,
            }),
          }
        );

        // checks if the upload was successful if not, throws an error
        if (uploadCompleteResponse.ok) {
          console.log("File uploaded successfully");
        } else {
          throw new Error("Failed to notify backend of upload completion");
        }
      } else {
        throw new Error("Failed to upload file to S3");
      }
    } catch (error) {
      console.error("Error uploading file", error);
      console.log("Failed to upload file" + error.message);
    }
  };

  return (
    <div className="flex w-full mb-4">
      <div className="upload-file">
        <label htmlFor="formFile" className="form-label">
          Upload File
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleFileChange}
        />
      </div>
      <div
        className="upload-file-btn flex items-end pb-2 ml-1 cursor-pointer"
        onClick={handleUpload}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
      </div>
    </div>
  );
}

// set the permissions to go fetch from S3


export default FileUpload;
