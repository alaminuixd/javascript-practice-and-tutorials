/* 
First Class Function:
    In JavaScript, a "first-class function" means that functions are treated just like any other value. This means you can assign functions to variables, pass them as arguments to other functions, and even return them from other functions.

A short list of what a first-class function includes in JavaScript:
    1) Assigning functions to variables.
    2) Passing functions as arguments to other functions.
    3) Returning functions as values from other functions.
    4) Storing functions in data structures like arrays or objects.
    5) Also, It can have its own methods and property.
*/

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
  The following is not considered good practice as we want to pass the function in the arguments but not invoke them here.
  */
console.log(greet(greetHello(), "Al Amin"));

// For better practice**, let's create another "greet" function
// Here "passFunc" is a callback function
const greet2 = (passFunc, yourName) => {
  // Invoking the function here
  return `${passFunc()} ${yourName}`;
};

// Here we passed the function "greetCongratulations" without invoking it
console.log(greet2(greetCongratulations, "Arshiya")); // Result: Congratulations Arshiya

const greetForSabrin = greet2(greetHello, "Sabrina Akhter");
console.log(greetForSabrin); // Result: Hello Sabrina Akhter
