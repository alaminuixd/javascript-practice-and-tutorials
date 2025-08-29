// ===============================
// Getter and Setter in JavaScript
// Inspired by Mosh Hamedani
// ===============================

// Basic object (direct access)
const person1 = {
  fName: "Al Amin",
  lName: "Khan",
};

// We can access fName and lName directly
console.log(`${person1.fName} ${person1.lName}`);
// ❌ Problem: We must repeat this everywhere we need full name

// -------------------------------
// Using a method
const person2 = {
  fName: "Md. Al Amin",
  lName: "Khan",
  fullName() {
    return `${this.fName} ${this.lName}`;
  },
};

console.log(person2.fullName());
// ✅ Works, but it's a method call
// ❌ Still not ideal: we can’t treat it like a normal property

// -------------------------------
// Using a getter
const person3 = {
  fName: "Ruhul Amin",
  lName: "Khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
};

console.log(person3.fullName);
// ✅ No parentheses needed, looks like a property
// ❌ Still read-only (we can’t assign to fullName)

// -------------------------------
// Using getter + setter
const person4 = {
  fName: "Sultana",
  lName: "Khanom",

  get fullName() {
    return `${this.fName} ${this.lName}`;
  },

  set fullName(val) {
    // split string into parts
    const parts = val.split(" ");
    this.fName = parts[0];
    // handle multi-word last name
    this.lName = parts.slice(1).join(" ");
  },
};

// This will print the default name
console.log(person4.fullName); // "Sultana Khanom"

// Change the fullName using the setter
person4.fullName = "Abrar Syed";
console.log(person4.fullName); // "Abrar Syed"
console.log(`${person4.fName} ${person4.lName}`); // "Abrar Syed"

// -------------------------------
// Preserving "default" names
const person5 = {
  _defaultFName: "Sultana", // store original defaults
  _defaultLName: "Khanom",

  fName: "Sultana",
  lName: "Khanom",

  get fullName() {
    return `${this.fName} ${this.lName}`;
  },

  set fullName(val) {
    const parts = val.split(" ");
    this.fName = parts[0];
    this.lName = parts.slice(1).join(" ");
  },
};

// Default values
console.log("Default:", person5.fullName); // "Sultana Khanom"

// Change name
person5.fullName = "Subrina Akhter";
console.log("Changed:", person5.fullName); // "Subrina Akhter"

// Access preserved default values
console.log("Original:", `${person5._defaultFName} ${person5._defaultLName}`);
// "Sultana Khanom"

// -------------------------------
// Object with both method and getter/setter
const person6 = {
  fName: "Al Amin",
  lName: "Khan",

  printName() {
    return `${this.fName} ${this.lName}`;
  },

  get fullName() {
    return `${this.fName} ${this.lName}`;
  },

  set fullName(val) {
    const parts = val.split(" ");
    this.fName = parts[0];
    this.lName = parts.slice(1).join(" ");
  },
};

console.log(person6.printName()); // "Al Amin Khan"
person6.fullName = "Abrar Syed"; // setter updates internal properties
console.log(person6.printName()); // "Abrar Syed"

// -------------------------------
// ⚠️ Common mistake: infinite recursion
const personWrong = {
  name: "Al Amin",

  // ❌ This causes infinite recursion because "this.name"
  // will call the getter again and again
  // get name() { return this.name; }
};

// ✅ Fixed version: use a different internal property
const personFixed = {
  _name: "Al Amin",

  get name() {
    return this._name;
  },

  set name(val) {
    this._name = val;
  },
};

console.log(personFixed.name); // "Al Amin"
personFixed.name = "Ruhul Amin";
console.log(personFixed.name); // "Ruhul Amin"
