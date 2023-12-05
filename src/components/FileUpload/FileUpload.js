function FileUpload() {
  return (
    <div className="flex w-full mb-4">
      <div class="upload-file">
        <label for="formFile" class="form-label">Upload File</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div className="upload-file-btn flex items-end pb-2 ml-1 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      </div>
    </div>
  )
}

export default FileUpload;