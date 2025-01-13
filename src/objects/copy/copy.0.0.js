const objS = { a: 1, b: { c: 2 } };
const objD = { a: 1, b: { c: 2 } };

// Shallow copy
const shallowCopy = { ...objS };
shallowCopy.b.c = 40; // Changing the nested property in the shallow copy

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(objD));
deepCopy.b.c = 40; // Changing the nested property in the deep copy

console.log(objS); // Original objS will be affected by shallowCopy's change
console.log(objD); // Original objD will NOT be affected by deepCopy's change
