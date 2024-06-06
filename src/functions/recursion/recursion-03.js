// Merge and sort Array
const arr3 = [5, 9, 10, [16, 19], 2, [8, 1, [4, 6], 11]];

function mergeArray(arr, index = 0, newArr = []) {
  if (index >= arr.length) return newArr.sort((a, b) => a - b);

  if (Array.isArray(arr[index])) {
    mergeArray(arr[index], 0, newArr);
  } else {
    newArr.push(arr[index]);
  }
  return mergeArray(arr, index + 1, newArr);
}

mergeArray(arr3);
