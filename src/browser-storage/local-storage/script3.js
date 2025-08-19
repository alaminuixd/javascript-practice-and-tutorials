/* localStorage.setItem(
  "person",
  JSON.stringify({ name: "Al Amin", father: "Syed Ahmed" })
);

const personDataString = localStorage.getItem("person");
const personData = JSON.parse(personDataString);
console.log(personData);

const namingID = document.getElementById("namingID");
const personParagraph = document.createElement("p");
namingID.append(personParagraph);
namingID.innerHTML = `<p>My name is ${personData.name}. My father is ${personData.father}</p>`; */

//Local Storage
localStorage.setItem("breakfast", "Hilsha Panta");
localStorage.setItem("dinner", "eggs");
console.log(localStorage.getItem("breakfast"));
localStorage.removeItem("dinner");

// Session Storage
sessionStorage.setItem("person", JSON.stringify({ name: "Al Amin" }));
sessionStorage.setItem(
  "education",
  JSON.stringify({ name: "SSC", year: 2022 })
);
sessionStorage.removeItem("education");
console.log(sessionStorage.getItem("person"));

// Cookie Storage
/* cookieStore.set(
  "login",
  JSON.stringify({ username: "alaminuixd", password: "Kh@n231" })
);

const loginInfo = cookieStore.get("login");
console.log(JSON.parse(loginInfo)); */

cookieStore
  // 1️⃣ Set a cookie named "login" with JSON data
  //    cookieStore.set() returns a Promise that resolves when saving is done.
  .set("login", JSON.stringify({ username: "alaminuixd", password: "Kh@n231" }))
  // 2️⃣ First .then() runs after the cookie is saved.
  //    "result" here is undefined because set() doesn't return any value.
  .then((result) => {
    console.log(result); // undefined
    // Return a new Promise to get the cookie value.
    return cookieStore.get("login");
  })
  // 3️⃣ Second .then() gets the resolved cookie object from get().
  .then((cookie) => {
    // cookie.value contains the stored JSON string.
    // We parse it back into an object.
    console.log(cookie);
    console.log(JSON.parse(cookie.value));
  });

cookieStore
  .set("flowers", JSON.stringify({ name: "Rose" }))
  .then(() => cookieStore.get("flowers"))
  .then((flower) => {
    console.log(JSON.parse(flower.value));
    return JSON.parse(flower.value);
  })
  .then((item) => console.log(item.name));
