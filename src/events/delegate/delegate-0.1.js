const div1 = document.createElement("div");
div1.setAttribute("id", "div1");
div1.setAttribute("class", "firstDiv");
div1.style.cssText = `
    width: 200px;
    height: 50px;
    background-color: royalblue;
    cursor: pointer;
`;
document.body.appendChild(div1);
const propertiesArray = [];
div1.addEventListener("click", (e) => {
  propertiesArray.push(e.target.tagName);
  propertiesArray.push(e.target.className);
  propertiesArray.push(e.target.id);

  // Parse the CSS text to extract the width
  const cssText = e.target.style.cssText;
  const widthMatch = cssText.match(/width:\s*([^\s;]+)/);
  if (widthMatch && widthMatch[1]) {
    propertiesArray.push(widthMatch[1]);
  } else {
    propertiesArray.push("Width not specified");
  }

  console.log(propertiesArray);
});
