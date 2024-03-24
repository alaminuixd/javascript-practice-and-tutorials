// Function to filter array elements based on a callback function
function filterByIndex(arr, callback) {
  // Check if arr is an array and callback is a function
  if (!Array.isArray(arr)) {
    throw new Error("The first argument must be an array.");
  }

  if (typeof callback !== "function") {
    throw new Error("The second argument must be a function.");
  }
  // empty erray to push filtered array items
  const filtered = [];
  // Loop through all array items
  for (let i = 0; i < arr.length; i++) {
    // ( arr[i] OR each "item" ) need to pass test in "callback"
    if (callback(arr[i])) {
      // push all items one by one, passed in "callback, in the "filtered" array.
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

// Functions for checking if a string's first character matches a given character
function incFirstChr(item, chr) {
  return item.toLowerCase()[0] === chr.toLowerCase();
}
function excFirstChr(item, chr) {
  return item.toLowerCase()[0] !== chr.toLowerCase();
}
// Functions for checking if a string's last character matches a given character
function incLastChr(item, chr) {
  return item.toLowerCase().slice(-1) === chr.toLowerCase();
}
function excLastChr(item, chr) {
  return item.toLowerCase().slice(-1) !== chr.toLowerCase();
}

const names = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];

// Filter names where the first character is 'q'
const incFirstQ = filterByIndex(names, (item) => incFirstChr(item, "q"));
// Filter names where the first character is not 'q'
const excFirstQ = filterByIndex(names, (item) => excFirstChr(item, "q"));
// Filter names where the last character is 'a'
const incLastA = filterByIndex(names, (item) => incLastChr(item, "a"));
// Filter names where the last character is not 'a'
const excLastA = filterByIndex(names, (item) => excLastChr(item, "a"));

console.log(incFirstQ);
console.log(excFirstQ);
console.log(incLastA);
console.log(excLastA);
