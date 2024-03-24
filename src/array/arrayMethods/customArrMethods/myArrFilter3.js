function filterByfirstIndex(array, chr) {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    let found = false;
    const arrString = array[i].toLowerCase().split("");
    for (let j = 0; j < arrString.length; j++) {
      if (arrString[j] === chr.toLowerCase()) {
        found = true;
        break;
      }
    }
    if (!found) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

const names = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];
const filtered1 = filterByfirstIndex(names, "q");
console.log(filtered1);

/* ****************************************
 ***************** Option 2 ****************
 *******************************************/

function filterNamesByCondition(arr) {
  const filtered = [];
  // "filterCondition" is a callback
  return (filterCondition, item) => {
    for (let i = 0; i < arr.length; i++) {
      let found = false;
      // convert each item into an Array with lowercase characters
      const arrString = arr[i].toLowerCase().split("");
      for (let j = 0; j < arrString.length; j++) {
        if (filterCondition(arrString, item.toLowerCase())) {
          found = true;
          break;
        }
      }
      if (!found) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  };
}

const names2 = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];

const filterByFirstChar = filterNamesByCondition(names2);

console.log(
  filterByFirstChar((arSt, item) => {
    return arSt[0] === item;
  }, "q")
);
//* Result:  ['sina', 'Sam', 'Ben', 'Zod', 'Ala']

/* ****************************************
 ***************** Option 2 ****************
 *******************************************/

function filterNamesByCondition(arr, filterFunc, chr) {
  const filtered = [];

  if (!Array.isArray(arr)) {
    throw new Error("The first argument must be an array.");
  }

  if (typeof filterFunc !== "function") {
    throw new Error("The second argument must be a function.");
  }

  if (typeof chr !== "string" || chr.length !== 1) {
    throw new Error("The third argument must be a single character string.");
  }

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].toLowerCase().split("");
    if (filterFunc(item, chr.toLowerCase())) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

// Test the function
//const names = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];

const incQStart = filterNamesByCondition(
  names,
  (item, chr) => item[0] === chr,
  "q"
);

const excQStart = filterNamesByCondition(
  names,
  (item, chr) => item[0] !== chr,
  "q"
);

console.log(incQStart);
console.log(excQStart);
