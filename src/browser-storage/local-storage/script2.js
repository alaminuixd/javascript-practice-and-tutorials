const labels = document.querySelectorAll(".container form label");
localStorage.setItem("test", "One");
// localStorage.removeItem("test");
const colors = [
  "red",
  "green",
  "blue",
  "purple",
  "chocolate",
  "orange",
  "DarkCyan",
  "DarkSlateGrey",
  "gray",
  "black",
];
localStorage.setItem("colors", JSON.stringify(colors));
const body = document.body;
const colorArr = JSON.parse(localStorage.getItem("colors"));
const randomColorIndex = Math.round(Math.random() * (colorArr.length - 1));
console.log(randomColorIndex);
body.style.cssText = `background-color: ${colorArr[randomColorIndex]};`;
labels.forEach((label) => {
  label.style.cssText = `color: ${
    colorArr[randomColorIndex] === "black" ||
    colorArr[randomColorIndex] === "DarkCyan" ||
    colorArr[randomColorIndex] === "blue" ||
    colorArr[randomColorIndex] === "green"
      ? "white"
      : "black"
  }`;
  /* label.style.cssText = `color: ${
    colorArr[randomColorIndex] === "black" ||
    colorArr[randomColorIndex] === "DarkCyan"
      ? "white"
      : "black"
  }`; */
});
