/* 
JavaScript "Objects" consist of two property types:
1) data properties
2) accessor properties
*/

// 1) data properties are properties that associate "data" with an "object".
const person = {
  // Data property
  pName: "",
};

// 2) "accessor" properties are "methods" to "get" and "set" the property of an object. These properties start with "get" and "set"
const person2 = {
  // Data property
  pName: "",
  // "get" is an accessor property
  get firstName() {
    return this.pName + "and don't call me.";
  },
  // "set" is also an accessor property
  set firstName(value) {
    console.log(value);
    this.pName = value + " is my first name.";
  },
};

person2.firstName = "Al Amin";
console.log(person2.firstName); // result: Al Amin is my first name. and don't call me.
