const AWS = require("aws-sdk");
const fs = require('fs');
//File System

AWS.config.update({
  accessKeyID: '',
  secretAccessKey: '',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

async function uploadImageToS3(filePath, fileName) {
  try {
    const fileContent = fs.readFileSync(filePath);

    const params = {
      Bucket: '',
      Key: fileName,
      //fileName will be the location of the file that defines what is passed through
      Body: fileContent,
      ACL: 'private'
    };

    const data = await s3.upload(params).promise();
    console.log('File uploaded successfully', data.Location);
    //data.Location directs to the public URL
    return data.Location;
  } catch(error) {
    console.error('Error uploading file', error);
    throw error;
  }
}