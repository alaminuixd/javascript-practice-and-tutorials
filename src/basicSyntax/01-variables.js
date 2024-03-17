/* 
JavaScript Variables are like containers in programming. In JavaScript, we use them to hold information we want to use later. We put values into variables using the equals sign (=).
# Rules to declare a variable in JavaScript:
    1) Variables are case-sensitive
    2) It can begin with a letter, underscore(“_”) or “$” symbol. No number at the begining is allowed
    3) It can contain (not at the begining) letters, numbers, underscore, or “$” symbol
    4) JavaScript reserved keywords cannot be a variable
JavaScript variables can be declared with "var", "let", and "const" keywords. From the beginning of JavaScript to ES6, it has only var to declare a variable. But in ES6 we have "let" and "const". I will be using "let" and "const" to declare a variable.    
*/

// We can use "let" keywords when we need to change the value of the variable:
let numVal = 0;
// change the value
numVal + 10;
// We can put number
let a = 10;
let b = 20;
let c = 30;
let result = a + b + c;
// we use console.log to print a result
console.log(result);
//===== result : 60
// variables
/* 
JavaScript variables can hold various types of data, including:
Numbers:    Like 5, 3.14, or -10.
Strings:    Text enclosed in single ('') or double ("") quotes, like "Hello" or 'JavaScript'.
Booleans:   True or false values, representing logical outcomes.
Arrays:     Lists of items, like [1, 2, 3] or ['apple', 'banana', 'orange'].
Objects:    Collections of key-value pairs, like {name: 'John', age: 30}.
Functions:  Blocks of code that perform a specific task.
Undefined:  A variable that has been declared but not assigned a value yet.
Null:   Represents the absence of any value or object.
These are the main data types in JavaScript, and variables can hold values of any of these types.
*/
// 1) Numbers
let num = 5;
console.log(num);
//==== result 5
let num2 = 5 + 3.14 + -10;
console.log(num2);
//===== result: -1.8599999999999994
/* 
    JavaScript strings are built using double "" or single '' quote
    But we will use double quote
*/
let string1 = "";
let string2 = "hello world";
let string3 = "hello world2";
