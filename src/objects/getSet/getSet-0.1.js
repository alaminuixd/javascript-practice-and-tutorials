/* 
JavaScript "Objects" consist of two property types:
1) data properties
2) accessor properties
*/

// 1) data properties are properties that associate "data" with an "object".
const person = {
  // Data property
  greeting: "",
};

// 2) "accessor" properties are "methods" to "get" and "set" the property of an object. These properties are made with "get" and "set"
const person2 = {
  // Data property
  greeting: "",
  // "set" is accessor property
  set firstName(value) {
    this.greeting = value + " is my first name.";
  },
  // "get" is also accessor property
  get firstName() {
    return this.greeting + "and don't call me.";
  },
};
