/* 
In JavaScript, several objects exhibit array-like behavior by having numeric indices and a length property. Here's a list of common array-like objects:
These array-like objects can often be treated similarly to arrays, but they may not support all array methods and functionalities.
*/

// 1) arguments object: Inside a function, the arguments object contains all the arguments passed to the function as indexed properties.
function example() {
  console.log(arguments[0]); // Accessing first argument
  console.log(arguments.length); // Number of arguments
}
example("a", "b", "c");

// 2) DOM NodeList: Returned by DOM methods like document.querySelectorAll() and element.childNodes, representing a collection of DOM elements.
var nodeList = document.querySelectorAll("div");
console.log(nodeList[0]); // Accessing first element
console.log(nodeList.length); // Number of elements

/* 
3) String objects: Strings in JavaScript can be accessed like arrays, with each character accessible by its index.
*/
var str = "hello";
console.log(str[0]); // "h"
console.log(str.length); // Length of string

// 4) TypedArray: Arrays that provide a way to access raw binary data. Examples include Int8Array, Uint8Array, etc.
var typedArray = new Int8Array(3);
typedArray[0] = 1;
console.log(typedArray[0]); // 1
console.log(typedArray.length); // 3

// 5) Array-like objects returned by APIs: Some APIs return objects that behave like arrays but are not instances of the Array object.
var arrayLike = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
console.log(arrayLike[0]); // "a"
console.log(arrayLike.length); // 3
