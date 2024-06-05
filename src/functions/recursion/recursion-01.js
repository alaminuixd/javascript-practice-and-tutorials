// Recursive one
function recur1(num) {
  if (num >= 5) return num;
  return recur1(num + 1);
}
recur1();

// Recursive two || Loop through and return a new Array
const arr1 = [1, 2, 3, 4, 5];
function printArr(array, index = 0, resArr = []) {
  if (index >= array.length) return resArr;
  resArr.push(array[index]);
  return printArr(array, index + 1, resArr);
}
printArr(arr1);

// Recursive two || Loop through, merge and return a new Array

const arr2 = [1, 2, 3, 4, 5, [6, 7, [9], 10]];

function printArr2(array, index = 0, resArr = []) {
  if (index >= array.length) return resArr;
  if (Array.isArray(array[index])) {
    // Concatenate the result of the recursive call with resArr
    resArr = resArr.concat(printArr2(array[index]));
    console.log(printArr2(array[index]));
  } else {
    resArr.push(array[index]);
  }
  return printArr2(array, index + 1, resArr);
}

const newArr = printArr2(arr2);
console.log(newArr);
