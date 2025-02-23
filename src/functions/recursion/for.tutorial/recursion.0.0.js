// count1: Using recursive calls with an argument passed in the function.
function count1(n) {
  if (n > 3) return; // Base case: Stop when n > 3
  console.log(n); // Output the current value of n
  count1(n + 1); // Recursive call with n + 1
}
count1(0); // Starts from 0

/*
  The function count1(0) executes as follows:
  1. Starts with n = 0
  2. Check if n > 3: No, so continue
  3. Log n: 0
  4. Call count1(1) -> n = 1
  5. Check if n > 3: No, so continue
  6. Log n: 1
  7. Call count1(2) -> n = 2
  8. Check if n > 3: No, so continue
  9. Log n: 2
  10. Call count1(3) -> n = 3
  11. Check if n > 3: No, so continue
  12. Log n: 3
  13. Call count1(4) -> n = 4
  14. Check if n > 3: Yes, so stop recursion.
  */

// count2: Using closure and modifying the outer variable `n`.
function count2() {
  let n = 0; // Declaring `n` in the outer function
  function inner() {
    if (n < 3) {
      console.log(n); // Log the current value of `n`
      n += 1; // Increment `n` using `+=` (modifies the outer variable)
      inner(); // Recursive call
    }
  }
  return inner; // Return the inner function to be executed
}

let res2 = count2();
res2(); // Calls the inner function, which uses `n` from the outer scope

/* 
  The function count2() executes as follows:
  1. Starts with n = 0 (declared in outer function)
  2. Check if n < 3: Yes, so continue
  3. Log n: 0
  4. Increment n: n = 1
  5. Call inner() again with n = 1
  6. Check if n < 3: Yes, so continue
  7. Log n: 1
  8. Increment n: n = 2
  9. Call inner() again with n = 2
  10. Check if n < 3: Yes, so continue
  11. Log n: 2
  12. Increment n: n = 3
  13. Call inner() again with n = 3
  14. Check if n < 3: No, so stop recursion.
  */

// count3: Using recursion with argument passing.
function count3() {
  let n = 0;
  function inner(n) {
    if (n < 3) {
      console.log(n); // Log the current value of `n`
      inner(n + 1); // Pass `n + 1` to the next recursive call
    }
  }
  return inner; // Return the inner function
}

let res3 = count3();
res3(0); // Pass 0 to the inner function when starting the recursion

/* 
  The function count3() executes as follows:
  1. Starts with n = 0 (passed as an argument)
  2. Check if n < 3: Yes, so continue
  3. Log n: 0
  4. Pass n + 1 (n = 1) to the next call of inner()
  5. Check if n < 3: Yes, so continue
  6. Log n: 1
  7. Pass n + 1 (n = 2) to the next call of inner()
  8. Check if n < 3: Yes, so continue
  9. Log n: 2
  10. Pass n + 1 (n = 3) to the next call of inner()
  11. Check if n < 3: No, so stop recursion.
  */

// count4: Using recursion with default argument value.
function count4() {
  let n = 0;
  function inner(n = 0) {
    // Default argument value
    if (n < 3) {
      console.log(n); // Log the current value of `n`
      inner(n + 1); // Recursive call with n + 1
    }
  }
  return inner; // Return the inner function
}

let res4 = count4();
res4(); // Calls the inner function, starts with default n = 0

/* 
  The function count4() executes as follows:
  1. Starts with n = 0 (default value)
  2. Check if n < 3: Yes, so continue
  3. Log n: 0
  4. Increment n: n = 1
  5. Call inner() again with n = 1
  6. Check if n < 3: Yes, so continue
  7. Log n: 1
  8. Increment n: n = 2
  9. Call inner() again with n = 2
  10. Check if n < 3: Yes, so continue
  11. Log n: 2
  12. Increment n: n = 3
  13. Call inner() again with n = 3
  14. Check if n < 3: No, so stop recursion.
  */

// count5: Simplified version of recursion with default argument value.
function count5(n = 0) {
  // Default argument value
  if (n < 3) {
    console.log(n); // Log the current value of `n`
    count5(n + 1); // Recursive call with n + 1
  }
}

count5(); // Calls count5 with default n = 0

/* 
  The function count5() executes as follows:
  1. Starts with n = 0 (default value)
  2. Check if n < 3: Yes, so continue
  3. Log n: 0
  4. Increment n: n = 1
  5. Call count5() again with n = 1
  6. Check if n < 3: Yes, so continue
  7. Log n: 1
  8. Increment n: n = 2
  9. Call count5() again with n = 2
  10. Check if n < 3: Yes, so continue
  11. Log n: 2
  12. Increment n: n = 3
  13. Call count5() again with n = 3
  14. Check if n < 3: No, so stop recursion.
  */
