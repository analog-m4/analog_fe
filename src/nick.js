
const fileForm = document.querySelector("#fileForm")
const fileName = document.querySelector("#fileName ")
const fileInput = document.querySelector("#fileInput")

imageForm.addEventListener("submit", async event => {
  event.preventDefault()
  const file = fileInput.files[0]

fetch("/s3/index")
.then(response => response.json())
.then(data => {
  const { upload_url} = data;

  const file = ''
  fetch(upload_url, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type
    }
  })
})
  .then(response => {
      if (response.ok) {
        const filename = file.name;
        const fileLink = upload_url;

        const data = {
          name: filename,
          document: fileLink
        };

        fetch('/s3/create', {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json'          
          },
            body: JSON.stringify(data)
        })
        .then(response => {
          if (response.ok) {
            console.log("Information successfully stored in database.");
          } else {
            console.error("Information not sent successfully");
          }
        })
        .catch(error => {
          console.error('Error communicating with the back end application');
        });
      } else {
        console.error('Error uploading the file to S3');
      }
    })
    .catch(error => {
      console.error('Error fetching the upload URL from the backend');
    });
})