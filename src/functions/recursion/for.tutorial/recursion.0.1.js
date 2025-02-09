// The for loop inside "countdown" starts from the given "num" and decrements to 1.
function countdown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i); // "i" starts from "num" and decreases by 1 in each iteration.
  }
}
countdown(10); // Since we assigned 10 to "num", it prints 10, 9, 8... down to 1.

// Let's use recursion to achieve the same countdown behavior.
function countdown2(num) {
  // The code inside "if" runs only if the condition is met; otherwise, the function returns "undefined" implicitly.
  if (num > 0) {
    console.log(num);
    countdown2(num - 1); // Recursively call "countdown2" with "num - 1".
  }
}
countdown2(10); // Since 10 is greater than 0, it prints 10, 9, 8... down to 1.
countdown2(0); // Since 0 is not greater than 0, the "if" block doesn't execute, and the function returns "undefined".
countdown2(-1); // Since -1 is less than 0, the "if" block doesn't execute, and the function returns "undefined".

/* 
                                    BIG QUESTION (why using recursion)
                If they both achive the same behevior why using recursive funciton?
*/
// Reasons to Use Recursion:
/*
1. When the Problem is Naturally Recursive
    Some problems are naturally recursive, meaning they are easier to define in terms of smaller subproblems. Examples include:
    Tree Traversals (Binary Trees, DOM Tree)
    Graph Traversals (DFS, BFS)
    Factorial Calculation (n! = n * (n-1)!)
    Fibonacci Sequence (F(n) = F(n-1) + F(n-2))
*/
/* 
2. Code Readability & Simplicity
    Recursion often makes the code shorter and more readable.
*/
// Example:
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
// Without recursion, you'd need a loop:
function factorialLoop(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
// as you can see recursion makes it easier to express the logic.

/* 
3. Avoiding Explicit Loops (Functional Programming Style)
In functional programming, recursion is preferred over loops because it avoids mutability (changing variables).
*/
// Example:
// Instead of:
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}
sum([1, 2, 3]); // result 6
// You can use recursion:
function sum2(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum2(arr.slice(1));
}

function sum3(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
