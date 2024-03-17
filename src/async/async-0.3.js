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
  if (Array.isArray(obj)) {
    obj.forEach((user) => {
      const ul1 = document.createElement("ul");
      for (let key in user) {
        const li1 = document.createElement("li");
        if (typeof user[key] === "object") {
          li1.textContent = `${key}: `;
          const ul2 = document.createElement("ul"); // Create a new <ul> for nested object
          createNestedList(user[key], ul2); // Recursively populate the nested <ul>
          li1.appendChild(ul2); // Append the nested <ul> to the current <li>
        } else {
          li1.textContent = `${key}: ${user[key]}`;
        }
        ul1.appendChild(li1); // Append each list item to the ul1
      }
      parent.appendChild(ul1); // Append the ul1 to the parent
    });
  } else {
    // Handle single object case
    for (let key in obj) {
      const li1 = document.createElement("li");
      if (typeof obj[key] === "object") {
        li1.textContent = `${key}: `;
        const ul2 = document.createElement("ul"); // Create a new <ul> for nested object
        createNestedList(obj[key], ul2); // Recursively populate the nested <ul>
        li1.appendChild(ul2); // Append the nested <ul> to the current <li>
      } else {
        li1.textContent = `${key}: ${obj[key]}`;
      }
      parent.appendChild(li1); // Append each list item to the parent
    }
  }
}

const container = document.querySelector(".container");
container.classList.add("ULParent");

getRequest("./json/users.json", (res, error) => {
  if (error) {
    console.error("Error fetching data:", error);
    // Display an error message to the user if needed
  } else {
    createNestedList(res, container);
  }
});
