//https://jsonplaceholder.typicode.com/users
function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}

getRequest("https://jsonplaceholder.typicode.com/users", (err, response) => {
  if (err) {
    console.log("failed");
  } else {
    response.map((obj) => console.log(obj.username));
  }
});
