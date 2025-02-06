function myReduce(arr, cb, iniVal = 0) {
  for (let i = 0; i < arr.length; i++) {
    iniVal = cb(iniVal, arr[i]); // Pass both accu and cur
  }
  return iniVal;
}

const ar1 = [1, 2, 3];
const re1 = myReduce(
  ar1,
  (acu, cur) => {
    return acu + cur; // Correct the variable names
  },
  0
);

console.log(re1); // Output should be 6
