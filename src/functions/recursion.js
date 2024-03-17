/* 
Long defination:
Recursion is a programming technique where a function calls itself to solve a problem. It's like a loop, but instead of repeating a set of instructions, the function calls itself with modified parameters, making the problem smaller with each call until it reaches a base case that doesn't require further recursion.

Easy defination:
Any situation where you do something and depanding on the result you might do it again.

In programming, recursion occurs when a function call itself.
*/

// recursive functions have 2 parts:
// 1) the recursive call to the functoin
// 2) at least one condition to stop the recursion when it meet the condition
const recurToTen = (num = 1) => {
  if (num >= 10) return;
  num++;
  console.log(num);
  recurToTen(num);
};
recurToTen(0);

// Without recursion:
const fibonacci = (num, array = [0, 1]) => {
  // 1) num is "6" which is greater than "2" so process the code inside the while loop.
  // 2) num is "5" which is greater than "2" so process the code inside the while loop.
  // 3) num is "4" which is greater than "2" so process the code inside the while loop.
  // 4) num is "3" which is greater than "2" so process the code inside the while loop.
  // 5) num is "2" which is not greater than "2" so return the "array" and exit
  while (num > 2) {
    // 1) 1st loop: "nextToLast = 0" & "last = 1" so together [0, 1]
    // 2) 2nd loop: "nextToLast = 1" & "last = 1" so together [1, 1]
    // 3) 3rd loop: "nextToLast = 1" & "last = 2" so together [1, 2]
    // 4) 4th loop: "nextToLast = 2" & "last = 3" so together [2, 3]
    const [nextToLast, last] = array.slice(-2); // used array destructuring
    // 1) array.push: "nextToLast + last" OR "0 + 1 = 1" so, push 1 to array [0, 1, 1];
    // 2) array.push: "nextToLast + last" OR 1 + 1 = 2 so, push 2 to array & array is now [0, 1, 1, 2];
    // 3) array.push: "nextToLast + last" OR 1 + 2 = 3 so, push 3 to array & array is now [0, 1, 1, 2, 3];
    // 4) array.push: "nextToLast + last" OR 2 + 3 = 5 so, push 5 to array & array is now [0, 1, 1, 2, 3, 5];
    array.push(nextToLast + last);
    // 1) num - 1 OR 6 - 1 = 5
    // 2) num - 1 OR 5 - 1 = 4
    // 3) num - 1 OR 4 - 1 = 3
    // 4) num - 1 OR 3 - 1 = 2
    num -= 1;
  }
  // 1) array is [0,1, 1]
  // 2) array is [0, 1, 1, 2]
  // 3) array is [0, 1, 1, 2, 3]
  // 4) array is [0, 1, 1, 2, 3, 5]
  return array;
};

console.log(fibonacci(6));

/* ******************************************************************
 ************************ Recursion **********************************
 *********************************************************************/
const fib = (num, arr = [0, 1]) => {
  if (num <= 2) return arr; // This will only execute when num is less than or equal to 2.
  const [nextToLast, last] = arr.slice(-2); // [0, 1]
  return fib(num - 1, [...arr, nextToLast + last]); // The function will keep recursively calling itself until num is less than or equal to 2.
};
fib(10);

const fibonacci2 = (num, arr) => {
  // If arr is not provided, initialize it with the default value [0, 1]
  if (arr === undefined) arr = [0, 1];
  // If num is less than or equal to 2, return the current array arr
  if (num <= 2) return arr;
  // Destructure the last two elements of arr to variables nextToLast and last
  const [nextToLast, last] = arr.slice(-2); // [0, 1]
  // Recursively call fibonacci2 with num-1 and a new array constructed by adding the sum of nextToLast and last to the end of arr
  return fibonacci2(num - 1, [...arr, nextToLast + last]);
  // 0) num is now 9, arr = [0, 1, 1]
  // 1) num is now 8, arr = [0, 1, 1, 2]
  // 2) num is now 7, arr = [0, 1, 1, 2, 3]
  // 3) num is now 6, arr = [0, 1, 1, 2, 3, 5]
  // 4) num is now 5, arr = [0, 1, 1, 2, 3, 5, 8]
  // 5) num is now 4, arr = [0, 1, 1, 2, 3, 5, 8, 13]
  // 6) num is now 3, arr = [0, 1, 1, 2, 3, 5, 8, 13, 21]
  // 7) num is now 2, arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  // The base case is reached (num is equal to 2), so return arr
};

const fib2 = (num, arr = [0, 1]) => {
  if (num <= 2) return arr;
  const [nx, ls] = arr.slice(-2); // slice(-2) will always take last two numbers [0, 1]
  // so, nx = 0 & ls = 1
  return fib2(num - 1, [...arr, nx + ls]);
};

fib2(10);

const fib3 = (num2, arr2 = [0, 1]) => {
  if (num2 <= 2) return arr2;
  const [nxd, lsd] = arr2; // no arr2.slice(-2) here
  // so, [nxd, lsd] destruction will always captures 1st 2 elements
  return fib3(num2 - 1, [...arr2, nxd + lsd]);
};

fib3(10);

const fibonacciPos = (pos) => {
  // pos = 8
  // If the position is 0 or 1, return the position itself
  if (pos <= 1) return pos;
  // Initialize the Fibonacci sequence with the first two numbers
  // pos is not <= 1 OR pos is not "0 or 1". So process the next
  const seq = [0, 1];
  // Iterate from the third position up to the target position (pos) or 8
  // 1) seq = [0, 1]
  // 2) seq = [0, 1, 1]
  // 3) seq = [0, 1, 1, 2]
  // 4) seq = [0, 1, 1, 2, 3]
  // 5) seq = [0, 1, 1, 2, 3, 5]
  // 6) seq = [0, 1, 1, 2, 3, 5, 8]
  // 7) seq = [0, 1, 1, 2, 3, 5, 8, 13]
  // 8) seq = [0, 1, 1, 2, 3, 5, 8, 13, 21]
  for (let i = 2; i <= pos; i++) {
    // Calculate the next Fibonacci number by adding the last two numbers in the sequence (nextToLast + last)
    // loop will run 6 times | 3, 4, 5, 6, 7, 8
    // 1) i = 2 | i is not >= pos SO i = 2+1 OR i = 3
    // 2) i = 3 | i is not >= pos SO i = 3+1 OR i = 4
    // 3) i = 4 | i is not >= pos SO i = 4+1 OR i = 5
    // 4) i = 5 | i is not >= pos SO i = 5+1 OR i = 6
    // 5) i = 6 | i is not >= pos SO i = 6+1 OR i = 7
    // 6) i = 7 | i is not >= pos SO i = 7+1 OR i = 8
    // 7) i = 8 | i is not > pos SO, i = 8+1 OR i = 9
    // 8) i = 9 | i is > pos SO, go at the end and return seq[pos]
    const [nextToLast, last] = seq.slice(-2);
    // 1) [nextToLast, last] = [0, 1] AS seq = [0, 1]
    // 2) [nextToLast, last] = [1, 1] AS seq = [0, 1, 1]
    // 3) [nextToLast, last] = [1, 2] AS seq = [0, 1, 1, 2]
    // 4) [nextToLast, last] = [2, 3] AS seq = [0, 1, 1, 2, 3]
    // 5) [nextToLast, last] = [3, 5] AS seq = [0, 1, 1, 2, 3, 5]
    // 6) [nextToLast, last] = [5, 8] AS seq = [0, 1, 1, 2, 3, 5, 8]
    // 7) [nextToLast, last] = [8, 13] AS seq = [0, 1, 1, 2, 3, 5, 8, 13]
    seq.push(nextToLast + last);
    // 1) seq = [0, 1, nextToLast + last] OR [0, 1, 1]
    // 2) seq = [0, 1, 1, nextToLast + last] OR [0, 1, 1, 2]
    // 3) seq = [0, 1, 1, 2, nextToLast + last] OR [0, 1, 1, 2, 3]
    // 4) seq = [0, 1, 1, 2, 3, nextToLast + last] OR [0, 1, 1, 2, 3, 5]
    // 5) seq = [0, 1, 1, 2, 3, 5, nextToLast + last] OR [0, 1, 1, 2, 3, 5, 8]
    // 6) seq = [0, 1, 1, 2, 3, 5, 8, nextToLast + last] OR [0, 1, 1, 2, 3, 5, 8, 13]
    // 7) seq = [0, 1, 1, 2, 3, 5, 8, 13, nextToLast + last] OR [0, 1, 1, 2, 3, 5, 8, 13, 21]
  }
  return seq[pos];
  // Return the Fibonacci number at the target position
  // seq = [0, 1, 1, 2, 3, 5, 8, 13, 21] & seq[pos] OR seq[8] = 21
};

console.log(fibonacciPos(8));
// Result: 21
