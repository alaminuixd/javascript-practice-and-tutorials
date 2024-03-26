/* 
 1) Variables are like containers that hold information. In JavaScript, we use variables to store and manipulate data within our code.
 Imagine you have a wholesale grocery store where you sell items like sugar, lentils, rice, flour, and oil. Each of the items has its own container. If you put all the items together in a single container, you would not be able to separate them, and they would become useless as they got mixed together.
 Similarly, each of the items might belong to different categories. For example, rice might have different types, as might oil, lentils, and other items. Each type of similar item needs to be stored in an identical container to prevent them from getting mixed together.
 In programming, variables are used to solve this problem by storing different data types.

 2) Declaration: Declaring a variable means telling the computer we want to reserve a space in memory to store some data. In JavaScript, we declare variables using the keywords "var", "let", or "const".
 
*/

/* 
Declaration: Declaring a variable means telling the computer we want to reserve a space in memory to store some data. In JavaScript, we declare variables using the keywords "var", "let", or "const".
*/
// "var" has been part of JavaScript since its early versions ECMAScript 1 (ES1) 1997.
// "var rice" is a container where "var" is the container and "rice" is it's label.
//* We did not put/ store any rice in it yet

var rice;
// let was introduced in ECMAScript 6 (ES6), also known as ECMAScript 2015.
// "let rice" is also a container where "let" is the container and "rice" is it's label.
//* We did not put/ store any rice in it yet
let oi;
/* 
3) Assignment: Assigning a value to the "variable" is similar to put something in the variable.
*/
// we are assigning value "some rice" in the pre-declared "var rice" above.
rice = "some rice";
// we are declaring variable "whiteRice" and at the same time asigning value "White Rice" to it.
var whiteRice = "White Rice";
// same goes for "brownRice"
var brownRice = "Brown Rice";
//* we will not be using variable syntext "var" as we have the newer and modern "let"
//* We will be using variable syntex "let" as it's newer and modern.

/* 
    What could be used in a variable name?
    1) Letters (uppercase and lowercase): You can use letters from A to Z (both uppercase and lowercase) in variable names.
*/
let firstName = "John";
let lastName = "Doe";
/* 
 2) Digits (0-9): You can use digits in variable names, but they "cannot be the first character".
*/
let age2 = 30; // used digit "2" at the end
let the10Position = 25; // used digit 10 in the middle
let _2item = " Rice and Barly"; // "error" as we used "2" at the begining.
/* 
    3) Underscore (_) and Dollar Sign ($): You can use underscore (_) and dollar sign ($) in variable names.
*/
let big_sentense = "The quick brown fox jumps over a lazy dog.";
let $price = 20;
/*
    4) Unicode Characters: JavaScript allows the use of Unicode characters in variable names, but it's generally recommended to stick to ASCII characters for compatibility and readability. 
*/
let café = "Coffee";
