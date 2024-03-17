// Foundational Knowledge for writing pure functions
//JavaScript Data Type
/**
 *************** Premitive Data Type ***************
 * undefined
 * boolean
 * number
 * string
 * bigint
 * symbol
 */
/**************** Structural Data Type **************
 * Object: (new) Object, Array, Map, Set, WeakMap, Date
 * Function
 */

// In primitive data types changing values in the children don't change their parent's values.
let x = 2;
let y = x;
// the y got the value 2 from x
// the y is a child of the x as the y value 2 is assigned from the x
y += 1;
// We Added 1 to the y and this will not change the x
console.log(x); // result 2
console.log(y); // result 3
/*************************************** BUT ***************************************** */
// In Structural data types changing values in the children do change their parent's values.
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = arr1;
arr1.join(", "); // result 1, 2, 3, 4, 5 6 | Note: I used join() method to print the array values
arr2.join(", "); // result 1, 2, 3, 4, 5 6
// Now if i add or change values in any of them, it will take effect in both of them
arr2[2] = 20; // pushed 20 in the place of 2
arr1.join(", "); // result 1, 20, 3, 4, 5 6
arr2.join(", "); // result 1, 20, 3, 4, 5 6

/* ***************************************************************
 ************************* Mutable VS Immutable******************** */
// Primitives are immutable.
// Changing value and mutation are not the same.
let pName = "David Rogar";
// We can access any character of a string using array-like indexing.
console.log(pName[0]); // result: "D"
console.log(pName.split("").join(", ")); // result: D, a, v, i, d,  , R, o, g, a, r
pName[0] = "M"; // This wouldn't work because strings are immutable.
console.log(pName); // pName is still "David Rogar"
// But we can reassign the value of pName to something else.
pName = "John Doe"; // This is not mutating. This is reassigning values.
// Note:** Do not confused with reassignments and being mutable or immutable.

// Structural data types contains mutable data
const arr3 = [1, 2, 3, 4, 5, 6]; // Each value in the array represents numerical data and is mutable.
// Lets change a value/ data
arr3[2] = 30;
// The array index[2] value was 3 which we mutated to 30
console.log(arr3); // result [1, 2, 30, 4, 5, 6] // index 2 now changed to 30

//Pure functions require you to avoid mutating the data.

// Impure function that mutates the data
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
};

const scoreArray = [10, 20, 30, 40, 50, 60];
console.log(addToScoreHistory(scoreArray, 70));
// This mutates / change the original array
// This is considered to be a side effect.
// There are much more to learn in pur functions.

// Now we need to modify our function so it doesn't mutate/ change our original array data.

// First we need to learn shallow copy .vs deep copy (clones)
// ## Shallow copy
const mainArray1 = [10, 20, 30, 40, 50, 60];
// 1) Shallow copy using spread operator
const shallowArray1 = [...mainArray1, 10];
console.log(mainArray1); // result: [10, 20, 30, 40, 50, 60]
console.log(shallowArray1); // result: [10, 20, 30, 40, 50, 60, 70]
console.log(mainArray1 === shallowArray1); // result: false

// Array compare without shallow copy
const mainArray2 = [10, 20, 30, 40, 50];
const noShallowArray2 = mainArray2;
noShallowArray2.push(60); // This 60 will be added to mainArray2 too.
console.log(mainArray2 === noShallowArray2); // result: true

// 2) with Object.assign();
const mainArray3 = [10, 20, 30, 40, 50];
const shallowArray2 = Object.assign([], mainArray3); // shallow copy using Object.assign
console.log(mainArray3 === shallowArray2); // result false
shallowArray2.push(60);
console.log(mainArray3); // result: [10, 20, 30, 40, 50]
console.log(shallowArray2); // result: [10, 20, 30, 40, 50, 60]

const mainArray4 = [10, 20, 30, 40, 50];
const shallowArray3 = mainArray4;
mainArray4.push([60, 70, 80]);
mainArray4 === shallowArray3; // result: true
console.log(mainArray4); // result: [10, 20, 30, 40, 50, [60, 70, 80]]
console.log(shallowArray3); // result: [10, 20, 30, 40, 50, [60, 70, 80]]
// But if we make a shallow copy the shallow array will not get the nested array
const shallowArray4 = [...mainArray4];
console.log(shallowArray4);

// If we push something in nested array of the parent or child of shallow copy array it will take effect in both

const mainArray5 = [1, 2, 3, 4];
const shallowArray5 = [...mainArray5, 5]; // This is also true with " Object.assign([], mainArray5)"
console.log(mainArray5); // result: [1, 2, 3, 4]
console.log(shallowArray5); // result: [1, 2, 3, 4, 5]

// Shallow copy will take effect in both array's nested array
const mainArray6 = [1, 2, 3, 4, [5, 6], 7]; // [5, 6] nested array here
const shallowArray6 = [...mainArray6]; // shallowArray6 is [1, 2, 3, 4, [5, 6], 7]
// Add new value to shallowArray6 regular Array
shallowArray6.push(8);
// shallowArray6 is now [1, 2, 3, 4, [5, 6], 7, 8]
// BUT
// mainArray6 is still [1, 2, 3, 4, [5, 6], 7]. This is because we add value in the regular array area of shallowArray6
// Add value in nested array
mainArray6[4].push(9); // We added value to the nested array which is in 4th position
// This will take effect in both array as we added the value in nested array
console.log(mainArray6); // result: [1, 2, 3, 4, [5, 6, 9], 7] ** Added 9 in nested array
console.log(shallowArray6); // result: [1, 2, 3, 4, [5, 6, 9], 7, 8] ** Added 9 in nested array too even shallow copy
mainArray6 === shallowArray6; // This is false
// BUT
mainArray6[4] === shallowArray6[4]; // This is true

/* *************************************************************
 ****************************Object Freez************************
 ************************************************************* */
const scoreObject = {
  first: 44,
  second: 12,
  third: {
    a: 1,
    b: 2,
  },
};
const obj2 = scoreObject;
scoreObject.forth = 13; // forth value 13 will be added to both "scoreObject" & "obj2"
console.log(scoreObject);
console.log(obj2);
const obj3 = Object.freeze(scoreObject);
scoreObject.fifth = 14; // fifth value 14 will not be added as we freezed the object
console.log(scoreObject);
// BUT we can add value in nested object even after FREEZE
scoreObject.third.c = 3; // 3 will be added in the nested object

/* *************************************************************
 ************* Deep copy need to avoid this issue ************
 ************************************************************* */
// Several libraries like "lodash", "Ramda" and other have this feature built-in
/*
Here is a one line Vanilla JS solution without any libaries,
but it does not work with Dates, functions, undefined, infinity, RegExps, 
Maps, Sets, Blobs, FileLists, ImageDatas, and other complex data types
*/
// If we make shallow copy using JSON methods like below, we can add new value to the newScoreObj
const newScoreObj = JSON.parse(JSON.stringify(scoreObject));
newScoreObj.forth = 11; // forth: 11 will be added to the top level of the object

// Now we will make a Deep Clone function
const deepClone = (obj) => {
  // if "obj" is not an "Array" OR "Object" OR is null ( all arrays are objects)
  if (typeof obj !== "object" || obj === null) return obj;
  // Create an array or object to hold the values
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];
    newObj[key] = deepClone(value);
  }
  return newObj;
  /* ************************* IMPORTANT *********************************
What a function return is very important
This function "deepClone" will return "newObj" which is either an an "array" or an "object"
see "const newObj = Array.isArray(obj) ? [] : {}"
*/
};
