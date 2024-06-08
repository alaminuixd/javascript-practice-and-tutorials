// Merge using "Loop", "recursive function" and "Array.concat"
const r = [10, 3, 9, [6, 8], 1, 4, [5, 7, [2, 12], 11]];
function mergeArr(arr) {
  let flatenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // concate nested array to progressing array from "else"
      flatenArray = flatenArray.concat(mergeArr(arr[i]));
    } else {
      // for array "r" this will run first as first item "10" is not an array
      flatenArray.push(arr[i]);
    }
  }
  return flatenArray;
}

const res = mergeArr(r).sort((a, b) => a - b);
console.log(res);

//Merge using "Loop", "recursive function" and "Array.concat"
const r2 = [10, 3, 9, [6, 8], 1, 4, [5, 7, [2, 12], 11]];

function flattenArrayIterative(arr) {
  let stack = [...arr];
  let flatArray = [];

  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      flatArray.push(next);
    }
  }

  return flatArray.reverse();
}

const flattenedArray = flattenArrayIterative(r2);
console.log(flattenedArray);
