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
    perent.appendChild(ul1);
  });
}
const container = document.querySelector(".container");
container.classList.add("ULParent");
getRequest("https://jsonplaceholder.typicode.com/users", (res, error) => {
  if (error) {
    console.error("Error fetching data:", error);
    // Display an error message to the user if needed
  } else {
    res.forEach((user) => {
      const ul1 = document.createElement("ul");
      for (let k1 in user) {
        const li1 = document.createElement("li");
        if (typeof user[k1] === "object") {
          li1.textContent += `${k1}:`;
          const ul2 = document.createElement("ul");
          for (let k2 in user[k1]) {
            const li2 = document.createElement("li");
            if (typeof user[k1][k2] === "object") {
              li2.textContent += `${[k2]}:`;
              const ul3 = document.createElement("ul");
              for (let k3 in user[k1][k2]) {
                const li3 = document.createElement("li");
                if (typeof user[k1][k2][3] === "object") {
                  console.log(`${k3} is an object`);
                  li3.textContent += `${k3}:`;
                } else {
                  li3.textContent = `${k3}: ${user[k1][k2][k3]}`;
                }
                ul3.appendChild(li3);
              }
              li2.appendChild(ul3);
            } else {
              li2.textContent += `${[k2]}: ${user[k1][k2]}`;
            }
            ul2.appendChild(li2);
          }
          li1.appendChild(ul2);
        } else {
          li1.textContent += `${k1}: ${user[k1]}`;
        }
        ul1.appendChild(li1);
      }
      container.appendChild(ul1);
    });
  }
});

/* 
  
  
  
  const ul3 = document.createElement("ul");
  const li3 = document.createElement("li");
  */
