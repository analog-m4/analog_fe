function FileUpload() {
  return (
    <div className="flex w-full">
      <div class="mb-3">
        <label for="formFile" class="form-label">Upload File</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
    </div>
  )
}

export default FileUpload;