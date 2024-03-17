/**
 * The slice() method returns selected elements in an array, as a new array.
 * The slice() method does not change the original array.
In the slice method, the first parameter specifies the starting index (inclusive), 
and the second parameter specifies the ending index (exclusive).
 */

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slice1 = fruits.slice(1);
console.log(slice1); // new return array value "slice1" is a new array ["Lemon", "Apple", "Mango"]
/* 
This .slice(1) will slice fruits array starting with index 1 ["orange"] 
up to the end of the array and return a new array.
*/
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// This slice starts with index[1] "orange" upto or previous elment of index[3] which is "lemon"
const slice2 = fruits2.slice(1, 3);
console.log(slice2); // Result: ["orange", "Lemon"]

/* 
    array.slice() using negative value.
*/
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slice3 = fruits3.slice(-1);
// this will slice from last array fruits3[0] "Mango"  up to back 1 index (exclusive);
console.log(slice3); // result ["Mango"]
// slice() using two negative values:
const slice4 = fruits3.slice(-3, -1);
// stats from index[-3] (exclusive) "Lemon" and end to index[-1] (inclusive) "Apple"
console.log(slice4); // result: "Lemon" "Apple"
