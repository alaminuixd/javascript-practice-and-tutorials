/* 
Tail recursion is a type of recursion where the recursive call is the last operation performed in the function — meaning there’s nothing left to process after the call returns. This allows some programming languages to optimize it for better performance.
The recursive call is the last operation: means after the function calls itself, there’s nothing left to do — no calculations, no operations, just returning the result.
*/

// Negative tail recursion
function countdownNeg(n) {
  if (n <= 0) return; // Base case
  console.log(n); // Do something
  countdownNeg(n - 1); // Recursive call is the last action
}
countdownNeg(5);

// Positive tail recursion
function countdownPos(n) {
  if (n > 10) return; // Base case
  console.log(n); // Do something
  countdownPos(n + 1); // Recursive call is the last action
}
countdownPos(0);

function count() {
  let num = 0;
  function inner() {
    if (num < 10) {
      console.log(num);
      num += 1;
      inner();
    }
  }
  return inner;
}
let res1 = count();
res1();
