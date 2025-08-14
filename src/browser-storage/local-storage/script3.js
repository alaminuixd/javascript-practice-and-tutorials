localStorage.setItem(
  "person",
  JSON.stringify({ name: "Al Amin", father: "Syed Ahmed" })
);

const personDataString = localStorage.getItem("person");
const personData = JSON.parse(personDataString);
console.log(personData);

const namingID = document.getElementById("namingID");
const personParagraph = document.createElement("p");
namingID.append(personParagraph);
namingID.innerHTML = `<p>My name is ${personData.name}. My father is ${personData.father}</p>`;
