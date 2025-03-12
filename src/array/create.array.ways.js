// We initially create an "Array" using "Array notation" syntax
const numArray = [0, 9, 3, 4, 8]; // Lowercase 'n' for consistency with common variable naming conventions
const fruitsArray = ["mango", "banana", "apple", "grapes"];

// Besides array notation ([]), here are other ways to create arrays in JavaScript:
// 1. Array using Constructor pattern:
const constructorArrNum = new Array(1, 2, 3); // [1, 2, 3]
// Using a single "number parameter" in the "Array" constructor gives a new array with a length equal to the given number
const constructorArrLength = new Array(5); // [empty × 5]
// If a single parameter is a "string," it returns an "Array" with a single element
const constructorArrStr = new Array("some value"); // ["some value"]

/* 
2. Creating Array without using "new" before Array constructor.
This is a JS buint in behavior. This is not something you can normally do with your own classes.
*/
const newLessConstructorArray1 = Array(5); // [empty × 5]
const newLessConstructorArray2 = Array(1, 2, 3, 4); // [1, 2, 3, 4]
// But you can mimic this behavior with a function that calls new internally:
class MyArray {
  constructor() {
    console.log("MyArray constructor called!");
  }
}
function createMyArray() {
  return new MyArray(); // Uses 'new' internally
}
const arr1 = new MyArray(); // Works
const arr2 = createMyArray(); // Also works, without 'new'

/*
3. Array using factory pattern
An array created using the factory pattern is just an array created by a function (the "factory") that returns an array. It’s a way to encapsulate array creation logic.
*/
function createFactoryArray(...elements) {
  return [...elements]; // Factory function returning an array
}

const myArray = createFactoryArray(1, 2, 3, 4);
console.log(myArray); // [1, 2, 3, 4]

/* 
4. Array.from(): 
Creates an array from an array-like or iterable object:
*/
const arr = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
// array from DOM nodes
const myList = document.querySelectorAll("ul.myList > li");
console.log(myList); // NodeList(5)
const listArray = Array.from(myList);
console.log(listArray); // [li, li, li, li, li]

/* 
5. Array.of():
Creates an array with the given arguments:
*/
let arrOf = Array.of(1, 2, 3); // [1, 2, 3]
console.log(arrOf); // [1, 2, 3]

/* 
6. Split Method:
Convert a string to an array:
! This should be used only on strings
*/
const arrFromSplit1 = "Hello".split(""); // ["H", "e", "l", "l", "o"]
const arrFromSplit2 = "it's clean".split(" "); // ["it's", 'clean']
const arrFromSplit3 = "Hello".split(""); // ['H', 'e', 'l', 'l', 'o']
// Use separator that you want to split/make the array from.
const arrFromSplit5 = "1,2,3".split(","); // ['1', '2', '3']
// Using only ","
const arrFromSplit6 = "mango,banana,grapes,apple".split(",");
// Using "," and "space"
const arrFromSplit7 = "mango, banana, grapes, apple".split(", ");

/* 
7. Spread Operator:
Create a new array by spreading another array or iterable:
*/
const arrSpreadOperator1 = [...[1, 2, 3]]; // [1, 2, 3]
const arrToSpread1 = [1, 5, 3, 4, 9];
const arrSpreadOperator2 = [...arrToSpread1]; // [1, 5, 3, 4, 9]

/* 
8. Using Generators:
Create arrays from generator functions:
*/
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}
let arrFromGenerator = Array.from(generateNumbers()); // [1, 2, 3]
