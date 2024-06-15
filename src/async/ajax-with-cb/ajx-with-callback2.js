const loadingElm = document.getElementById("loadingElm");
const usersName = document.getElementById("users");
function xhrRequest(url, callback, loadElm) {
  const xhr = new XMLHttpRequest();
  let loading = "";
  xhr.open("get", url);
  xhr.onloadstart = () => {
    loading = "Loading...";
    if (loading !== null) {
      loadElm.innerText = loading;
    }
  };
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        loading = null;
        callback(xhr.response, null);
      } else {
        callback(null, xhr.status);
      }
    }
  };
  xhr.send();
}

xhrRequest("https://jsonplaceholder.typicode.com/users", (res, err) => {
  if (res) {
    res.map((item) => {
      usersName.innerHTML = "<li>" + item.name + "</li>";
    });
  } else {
    console.log(err);
  }
});
