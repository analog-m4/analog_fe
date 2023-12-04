const awsS3Service = require('../src/services/awsS3service.js');;

async function handleFileUpload(filePath, fileName) {
  try {
    const fileUrl = await awsS3Service.uploadFileToS3(filePath, fileName);

    return fileUrl;

  } catch (error) {
    console.error("Error occurred while handling file upload:", error);
    throw error;
  }
}