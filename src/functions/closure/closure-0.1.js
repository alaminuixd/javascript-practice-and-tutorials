/*
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's 
variables, even after the outer function has finished executing.

A closure is like a "backpack" that an inner function wears. It allows the inner function to carry with it 
and access all the variables and functions from its outer function, even when the outer function has already 
finished running.
*/

// Basic closure:
const outerFunc = () => {
  // "outerFunc" have access to the following console.
  console.log("I've some secret propeties for my kid innerFunc.");
  // The following property is from "outerFunc" for his child "innerFunc" but he can't access it.
  // But his kid innerFunc can access it. :)
  // And here creates the closure/ backpack for innerFunc from his parent "outerFunc"
  let myPropertyForMyKid = '10 gold coins for you my kid "innerFunc"';
  const innerFunc = () => {
    let myPropFromFather = myPropertyForMyKid;
    return myPropFromFather;
  };
  return innerFunc;
};
// invoke "outerFunc" to print it's property in it's console.
// This will only print what "outerFunc" has in console.log();
outerFunc();
// Now I will insert "innerFunc" into variable "innerFunction" using it's parent "outerFunc()"
const innerFunction = outerFunc();
// Now innerFunction is a copy of innerFunc();
console.log(innerFunction());
