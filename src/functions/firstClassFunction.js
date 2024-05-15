/* 
First Class Function:
    In JavaScript, a "first-class function" means that functions are treated just like any other value. This means, you can assign functions to variables, pass them as arguments to other functions, and even return them from other functions.

A short list of what a first-class function includes in JavaScript:
    1) Assigning functions to variables.
    2) Passing functions as arguments to other functions.
    3) Returning functions as values from other functions.
    4) Storing functions in data structures like arrays or objects.
    5) Also, It can have its own methods and property.
*/
// 1) Assigning functions into a variable
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const xF1 = add;
console.log(x);
// result: x = (a, b) => {  return a + b; }
const yF1 = sub;
console.log(yF1);
// result: yF1 = (a, b) => {  return a - b; }

// 2) Passing functions as arguments to other functions (basic):
const greetHello = () => {
  return "Hello";
};

const greetCongratulations = () => {
  return "Congratulations";
};

const greet = (passFunc, yourName) => {
  // Using the function reference
  return `${passFunc} ${yourName}`;
};

console.log(greet(greetCongratulations, "Abrar Syed"));
/* 
  The above result:
  [Function: greetCongratulations] Abrar Syed
  Or
    () => {
        return "Congratulations";
    } Abrar Syed
  
  This is because we passed the "greetCongratulations" function as a reference.
  !IMPORTANT: The following is not considered good practice as we want to pass the function in the arguments but not invoke them here.
  */
console.log(greet(greetHello(), "Al Amin"));

// **For better practice**, let's create another "greet" function
// Here "passFunc" is a callback function
const greet2 = (passFunc, yourName) => {
  // Invoking the function here
  return `${passFunc()} ${yourName}`;
};

// Here we passed the function "greetCongratulations" without invoking it
console.log(greet2(greetCongratulations, "Arshiya")); // Result: Congratulations Arshiya

const greetForSabrin = greet2(greetHello, "Sabrina Akhter");
console.log(greetForSabrin); // Result: Hello Sabrina Akhter

// 4) Storing functions in data structures like arrays or objects.
// const add = (a, b) => { return a + b; };
// const sub = (a, b) => { return a - b; };
// store in Array
const funcArray = [];
funcArray.push(add);
funcArray.push(sub);
console.log(funcArray[0]); // result: (a, b) => { return a + b; };
console.log(funcArray[1]); // result: (a, b) => { return a - b; };
console.log(funcArray[0](20, 10)); // result: 30
console.log(funcArray[1](20, 10)); // result: 10
// Another example
const mathArr = [add, sub]; // array contains 2 functions

for (let i = 0; i < mathArr.length; i++) {
  if (i === 0) {
    console.log("The addition is " + mathArr[i](20, 5));
  } else {
    console.log("The subtraction is " + mathArr[i](50, 20));
  }
}
/***************** Important ***********************/
const [add2, sub2] = funcArray; // destructuring
add2(20, 10); // result: 30
sub2(20, 10); // result: 10

// store in Object
const funcObj = {};
funcObj.add3 = add; // function add() will be added to add3
funcObj.add3 = add; // function sub() will be added to sub3
funcObj.sub3 = sub;

console.log(funcObj.add3); // result: (a, b) => { return a + b; };
console.log(funcObj.sub3); // result: (a, b) => { return a - b; };
console.log(funcObj.add3(20, 10)); // result: 30
console.log(funcObj.sub3(20, 10)); // rsult: 10
