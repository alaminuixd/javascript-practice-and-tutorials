// Uses of Factory functions
// A factory function is a function that returns an object
function elementFactory(elmName, parent) {
  const elm = document.createElement(elmName);
  parent.appendChild(elm);
  return {
    elm,
    setText(theText) {
      const txt = theText;
      elm.innerHTML = txt;
      return txt;
    },
    setStyle(theStyle) {
      const style = theStyle;
      elm.style.cssText = style;
      return style;
    },
  };
}

const h1 = elementFactory("h1", document.body);

h1.setText("How are you man? I've been waiting a long time for you.");

h1.setStyle(`
    font-size: 35px;
    color: red;
`);
