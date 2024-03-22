const text = "The quick brown fox jumps over the lazy dog.";
const textArr = text
  .toLowerCase()
  .split("")
  .filter((char) => /[a-z]/.test(char)) // Keep only characters from 'a' to 'z'
  .filter((char, index, arr) => arr.indexOf(char) === index) // Remove double characters
  .sort() // Sort the characters
  .join(""); // Convert the array back to a string

console.log(textArr);

/* ===============================================================
================================================================== */

/* 
Array.indexOf(arrayItem) search for an array's item position. If 1st one position is found it ignor others.

let txt = "abacba"
txt.indexOf(a); is = 0
we have 3 "a" here and it will only get the first "a" index positon and ignor the others postion

txt.indexOf(b); is = 1
we have 2 "b" here and it will only get the first "b" index positon and ignor the others postion
*/

let txt = "The quick brown fox jumps over the lazy dog.";
txt = txt.toLowerCase();
txt = txt.split(""); // Split the string into an array of individual characters.
txt = txt.filter((item) => /[a-z]/.test(item)); // filters out only charecters [a-z] and ignor others
txt = txt.filter((item, index, arr) => arr.indexOf(item) === index);
txt = txt.sort();
console.log(txt);

// Make a new Set() with the output letters Array

const mySet = new Set();
for (let i = 0; i < txt.length; i++) {
  mySet.add(txt[i]);
}
for (let val of mySet) {
  console.log(val);
}
