const getRequest = (url, callback) => {
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
};
function createNestedList(obj, parent) {
  obj.forEach((user) => {
    const ul1 = document.createElement("ul");
    for (let key in user) {
      const li1 = document.createElement("li");
      if (typeof user[key] === "object") {
        li1.textContent = `${key}: `;
        createNestedList(user[key], ul1);
      } else {
        li1.textContent = `${key}: ${user[key]}`;
      }
    }
    parent.appendChild(ul1);
  });
}
const container = document.querySelector(".container");
container.classList.add("ULParent");
getRequest("https://jsonplaceholder.typicode.com/users", (res, error) => {
  if (error) {
    console.error("Error fetching data:", error);
    // Display an error message to the user if needed
  } else {
    createNestedList(res, container);
  }
});

/* 
  
  
  
  const ul3 = document.createElement("ul");
  const li3 = document.createElement("li");
  */
