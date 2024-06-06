function makeNewArray(arr, index = 0, newArr = []) {
  // condition to return new merged array and to stop recursion
  if (index >= arr.length) return newArr;
  newArr.push(arr[index] + 1);
  return makeNewArray(arr, index + 1, newArr);
}

const resArray = makeNewArray([1, 2, 3]);
console.log(resArray); // Output: [2, 3, 4]
/* 
Step - 1:
invoke "makeNewArray([1, 2, 3], index=0, newArray=[]);
check condition if (index=0) >= (arr.length=3) which is false. So, no return but go to the next line
newArr.push(arr[index]+1) ||  newArr.push(2)
return makeNewArray(arr, index + 1, newArr) || makeNewArray([1, 2, 3], 1, [2]);

Step - 2:
invoke "makeNewArray([1, 2, 3], index=1, newArray=[2]);
check condition if (index=1) >= (arr.length=3) which is false. So, no return but go to the next line
newArr.push(arr[index]+1) ||  newArr.push(3)
return makeNewArray(arr, index + 1, newArr) || makeNewArray([1, 2, 3], 2, [2, 3]);

Step - 3:
invoke "makeNewArray([1, 2, 3], index=2, newArray=[2, 3]);
check condition if (index=2) >= (arr.length=3) which is false. So, no return but go to the next line
newArr.push(arr[index]+1) ||  newArr.push(4)
return makeNewArray(arr, index + 1, newArr) || makeNewArray([1, 2, 3], 3, [2, 3, 4]);

Step - 4:
invoke "makeNewArray([1, 2, 3], index=3, newArray=[2, 3, 4]);
check condition if (index=3) >= (arr.length=3) which is true. So, return the newArray=[2, 3, 4] and exit
*/

// Merge nested Array
function mergeArray(arr, index = 0, newArr = []) {
  if (index >= arr.length) return newArr;

  if (Array.isArray(arr[index])) {
    // For the first nested Array, the arr[index] here is [16, 19]
    mergeArray(arr[index], 0, newArr); // arr[index] === [16, 19]
    /*
    1. We come hre after pushing [5, 9, 10] to newArr as it found next element an array
    So, make the recursive call with the following values
    mergeArray(arr[index], 0, newArr);
    OR
    mergeArray([16, 19], 0, [5, 9, 10])
    Here it will push [16, 19] following else and return recursive call algorithm.
    so, newArr = [5, 9, 10, 16, 19]
    1. Then check for the next item which is not array so go to else and push it with [5, 9, 10, 16, 19]
    */
  } else {
    /* 
    1. in arr first 3 items are not array so push to newArray OR [5, 9, 10]
    */
    newArr.push(arr[index]);
  }

  return mergeArray(arr, index + 1, newArr);
}

const arr3 = [5, 9, 10, [16, 19], 2, [8, 1, [4, 6], 11]];
const res2 = mergeArray(arr3);
console.log(res2);
