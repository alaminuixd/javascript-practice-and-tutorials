const btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(btn);
btn.style.cssText = `
    padding: 8px 15px;
    font-size: 17px;
    margin: auto;
    display: block;
`;

btn.addEventListener("click", printEventClick);
function printEventClick(e) {
  console.log(`The even type is ${e.type}`);
}

btn.addEventListener("mouseleave", printEventMouseleave);
function printEventMouseleave(e) {
  console.log(`The even type is ${e.type}`);
}

btn.addEventListener("mousedown", printEventMousedown);
function printEventMousedown(e) {
  console.log(`The even type is ${e.type}`);
}

btn.addEventListener("mouseup", printEventMouseup);
function printEventMouseup(e) {
  console.log(`The even type is ${e.type}`);
}

btn.addEventListener("mouseenter", printEventEnter);
function printEventEnter(e) {
  console.log(`The even type is ${e.type}`);
}
