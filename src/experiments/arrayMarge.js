const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
// Using concat method:
function mergeArrays(arrA, arrB) {
  return arrA.concat(arrB);
}
const merg1 = mergeArrays(arr1, arr2); // result: [1, 2, 3, 4, 5, 6, 7, 8]

// merge array eliminating duplicate elements
function mergeArrays2(arrA, arrB) {
  const marged = [...arrA];
  for (let i = 0; i < arrB.length; i++) {
    if (!marged.includes(arrB[i])) {
      marged.push(arrB[i]);
    }
  }
  return marged;
}
const merge2 = mergeArrays2(arr1, arr2);
console.log(merge2); // result: [1, 2, 3, 4, 5, 6, 7]

// merge using spread operator
const merge3 = [...arr1, ...arr2];
console.log(merge3); // result: [1, 2, 3, 4, 5, 6, 7, 8]

// remove duplicate element and merge using the "Set" data structure
function mergeArrays3(arrA, arrB) {
  const merged = new Set([...arrA, ...arrB]); // set remove duplicate elements automatically
  return merged;
}

/* 
more advanced concept: merging arrays of objects based on a common property.

let's say you have arrays of objects representing users, and you want to merge them based on their "id" property. If an object with the same "id" exists in both arrays, you want to merge their properties. Otherwise, you want to add the object to the merged array.
*/
const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Bob" },
];
function mergeArrayOfObjects(arrObj1, arrObj2) {
  let merged = [...arrObj1];
  for (let i = 0; i < arrObj2.length; i++) {
    if (!merged.includes(arrObj2.id.val)) {
      merged.push(arrObj2.id.val);
    }
  }
  return merged;
}
