const arr = [33, 93, 37, 73, 42, 8, 24];

// Using the spread operator in the function call doesn't work because we are passing the array as individual elements
function getLargest1(...arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > max && (max = arr[i]);
  }
  return max;
}
console.log(getLargest1(...arr)); // result: -Infinity

// No need to spread the argument here, passing the whole array works fine
function getLargest2(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > max && (max = arr[i]);
  }
  return max;
}
console.log(getLargest2(arr));

// Spread the array both in the parameter and argument to unpack the array into individual values
function getLargest3(...arr) {
  //! Even though we spread the array in the arguments, inside the function it is still treated as an array
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > max && (max = arr[i]);
  }
  return max;
}
console.log(getLargest3(...arr));
