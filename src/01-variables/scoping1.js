var a = 10;
// we can typically console
console.log(a); // result: 10
// The "a" using "var" is a property of the global "window" object.
console.log(this.a); // result: 10

let b = 20;
// typical console
console.log(b); // result: 20
// The "b" using "let" is not a property of the global "window" object.
console.log(this.b); // result: undefined

/************************************************
 ************* Using Arrow function *************
 ***********************************************/
var a2 = 10;
let b2 = 20;
const af1 = () => {
  // typical console
  console.log(a2);
  console.log(b2);
};
af1(); // result: 10 and 20

const af2 = () => {
  // console using "this"
  console.log(this.a2);
  console.log(this.b2);
};

af2(); // result: 10 and undefined
// The "b2" using "let" is not a property of the global object.

/************************************************
 ********** Using function defination ***********
 ***********************************************/
// Function defination and Arrow function result same in this case
function f2() {
  console.log(this.a2);
  console.log(this.b2);
}
f2(); // result: 10 and undefined (as same as "Arrow function")

/************************************************
 ********** Using Object ***********
 ***********************************************/

let fName = "Al Amin";
let lName = "Khan";
const obj1 = {
  fName: "Sultana",
  showName: () => {
    return `${this.fName} ${this.lName}`;
  },
};
console.log(obj1.showName()); // result: undefined undefined
// Why?
/* 
Arrow functions don't have their own this context; instead, they inherit this from the surrounding lexical scope. Also "let" is the not the property of the global object. 
*/

// But if we do it with reguler function
const obj2 = {
  fName: "Sultana",
  showName() {
    return `${this.fName} ${this.lName}`;
  },
};
console.log(obj2.showName()); // result: Sultana undefined
// "Sultana" is taken from inside the "obj2" but as we declared the "lName" globally using "let", "this" can not get it.
