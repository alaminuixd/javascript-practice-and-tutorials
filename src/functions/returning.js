/*
 Returning value
When a method returns a value, it's meant to give you something that you can use or store. 
A function always return a single value.
When we need to return more than one value we can enclose them in an object or array
 */

// Function a returns nothing, so it implicitly returns 'undefined'
function a() {
  return; // 'undefined' is returned by default when there is no explicit return value
}

a(); // The output of a() is 'undefined'

// Function b returns the result of adding 1 and 2
function b() {
  return 1 + 2; // Returns the sum of 1 and 2, which is 3
}

b(); // The output of b() is 3

// Function c returns an array containing two sums
function c() {
  let a = 1;
  let b = 2;
  let c = 3;
  // The array contains two sums: a + b and b + c
  return [a + b, b + c]; // Returns an array with values [3, 5]
}

c(); // The output of c() is [3, 5], which is an array containing the sums
