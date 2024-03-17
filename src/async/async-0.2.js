function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        callback(response, null);
      } else {
        callback(null, xhr.status);
      }
    }
  };
  xhr.send();
}
const container = document.querySelector(".container");
console.dir(container);
function crElFrObj(obj, parent) {
  if (Array.isArray(obj)) {
    obj.forEach((user) => {
      const ul1 = document.createElement("ul");
      for (let key in user) {
        const li1 = document.createElement("li");
        if (typeof user[key] === "object") {
          li1.textContent += `${key}: `;
          const ul2 = document.createElement("ul");
          crElFrObj(user[key], ul2);
          li1.appendChild(ul2);
        } else {
          li1.textContent += `${key}: ${user[key]}`;
        }
        ul1.appendChild(li1);
      }
      parent.appendChild(ul1);
    });
  }
}

getRequest("./json/users.json", (result, error) => {
  if (error) {
    console.error("Error fatching data", error);
  } else {
    crElFrObj(result, container);
  }
});
