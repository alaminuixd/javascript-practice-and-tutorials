// Function to create elements
function crElm(elm, id = "", cls = "") {
  let element = document.createElement(elm);
  element.setAttribute("id", id);
  element.setAttribute("class", cls);
  return element;
}
// create elements
const cont = crElm("div", "container", "container");
const btn = crElm("button", "btn1", "btn1");
const result = crElm("h2", "res", "res");
// add text to button
btn.innerText = "Click me";
//append elements to the body
document.body.appendChild(cont);
cont.append(btn, result);

// callback function experiments
function printName(fName, lName, cb) {
  let fn = fName;
  let ln = lName;
  let fullName = `${fn} ${ln}`;
  return cb ? cb(fullName) : "nothing";
}

function printName2(fName, lName, cb) {
  return cb ? cb(fName, lName) : "nothing";
}

function theCb(val) {
  // "val" is "fullName" in "printName()" function
  return val;
}
function theCb2(val1, val2) {
  return `${val1} ${val2}`;
}

btn.addEventListener("click", () => {
  result.textContent += printName("Al Amin", "Khan", theCb);
});

btn.addEventListener("dblclick", () => {
  result.textContent += printName2("Ruhul Amin", "khan", theCb2);
});
