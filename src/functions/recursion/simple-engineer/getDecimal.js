// getDecimal function without returning the recursion
function getDecimal1(decimal, result = "") {
  if (decimal <= 0) {
    /* this result will never return if we can't make it <= 0
    the only way to make it 0 is to add 0 as the parameter value "getDecimal(0)" OR
    for greater than 0 number "getDecimal(1 or more)" do some algoretham so it reduce to 0 */
    return result;
  }
  // the following continue to prepend "a remainder" as many times as the recursion runs
  result = (decimal % 2) + result;
  /*
    if we dont return "getDecimal1(...)" it will add and remove in the call stack but values will never be added to the result while rewinding. The function call result be "undefined". Check the "basic()" function that return "undefine" below.
   */
  getDecimal1(Math.floor(decimal / 2), result);
}
console.log(getDecimal1(5));

/* 
1️⃣ First call:
decimal = 5
result = ""
(5 % 2) = 1, so:
result = "1"
Calls getDecimal1(2, "1") — but doesn’t return it!

2️⃣ Second call:
decimal = 2
result = "1"
(2 % 2) = 0, so:
result = "01"
Calls getDecimal1(1, "01") — no return again.

3️⃣ Third call:
decimal = 1
result = "01"
(1 % 2) = 1, so:
result = "101"
Calls getDecimal1(0, "101") — still no return.

4️⃣ Fourth call:
decimal = 0
Base case hits — returns "101" to… no one. Because the previous call didn’t return it.

⚠️ What’s happening:
Each call updates its own result, but since there’s no return, the value never travels back up the call stack. Once the function finishes, the final result "101" is gone because no one collected it.

👉 That’s why result updates only inside each call but never gets passed back or displayed.
*/
function sub(a, b) {
  let total = 0;
  total = a + b; //! we did not return anything
}
console.log(sub(0, 10)); //result: undefined

function sum(a, b) {
  let total = 0;
  if (a + b <= 0) {
    return total; //!important: total will only return if value is " <= 0"
  }
  total = a + b; //!important: We did not return total here
}
console.log(sum(0, 0)); // result: 0
console.log(sum(1, 0)); // result: undefined
