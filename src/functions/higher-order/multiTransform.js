function multiTransform(arr, ...operations) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    // Apply all operations in sequence
    for (let j = 0; j < operations.length; j++) {
      value = operations[j](value);
    }
    result.push(value);
  }
  return result;
}

// Transformation functions:
const addTwo = (num) => num + 2;
const square = (num) => num * num;
const halve = (num) => num / 2;

const numbers = [1, 2, 3];
const transformed = multiTransform(numbers, addTwo, square, halve);

console.log(transformed); // Output: [4.5, 8]
/* 
  result = []
    (i) Loop 1
        value is 1
            (j) Loop 1
                value is operation[j](value) || addTwo(1) || 1 + 2 = 3
            (j) Loop 2
                value is operation[j](value) || square(3) || 3 * 3 = 9
            (j) Loop 3 
                value is opeartion[j](value) || halve(9) || 9 / 2 = 4.5
        result.push([4.5])
    (i) Loop 2
        value is 2
            (j) Loop 1
                value is operation[j](value) || addTwo(2) || 2 + 2 = 4
            (j) Loop 2
                value is operation[j](value) || square(4) || 4 * 4 = 16
            (j) Loop 3 
                value is opeartion[j](value) || halve(16) || 16 / 2 = 8
        result.push([8])
    (i) Loop 1
        value is 3
            (j) Loop 1
                value is operation[j](value) || addTwo(3) || 3 + 2 = 5
            (j) Loop 2
                value is operation[j](value) || square(5) || 5 * 5 = 25
            (j) Loop 3 
                value is opeartion[j](value) || halve(25) || 25 / 2 = 12.5
        result.push([12.5])
  return result || [4.5, 8, 12.5]
  */
