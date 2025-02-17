// Getter and Setter methods from Mosh Hamidani
const person = {
  fName: "Al Amin",
  lName: "Khan",
};
// We can access fName and lName like so
console.log(`${person.fName} ${person.lName}`);
// With current approach we have to repeat this in multiple places

// A better approach is making a method inside the person object
const person2 = {
  fName: "Md. Al Amin",
  lName: "Khan",
  fullName() {
    return `${this.fName} ${this.lName}`;
  },
};
console.log(person2.fullName());
/* 
This approach is read only. 
Which means we can't set a person full name from out side.
Everytime we have to print the same name.
It would be better if we could treat this as a property rather than a method like so:
console.log(person2.fullName);

This is where "GETTER" and "SETTER" comes to the picture:
1) We use "GETTER" to access properties of an object.
2) And "SETTER" to change (mutate) them.
*/
const person3 = {
  fName: "Ruhul Amin",
  lName: "Khan",
  get fullName() {
    // Now fullName is a getter
    return `${this.fName} ${this.lName}`;
  },
};
console.log(person3.fullName); // Now this is working without () parenthesis

// Now, to be able to set these values from outside, we need a "SETTER"
const person4 = {
  fName: "Sultana",
  lName: "Khanom",
  get fullName() {
    // Now fullName is a getter
    return `${this.fName} ${this.lName}`;
  },
  // val is an Array of our properties
  set fullName(val) {
    // split (Array Method) will make a space between "fName" and "lName"
    const parts = val.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};
// This will print the default name "Sultana Khanom"
console.log(person4.fullName);
// Let set a different name using "SETTER" fullName(val){...}
// This name "Abrar Syed" is setted as default untill we add new property.
person4.fullName = "Abrar Syed";
const newName = person4.fullName;
console.log(newName);
// Even this approach wouldn't work. It changed inside the object "person4" properties
const defaultName = `The default name is: ${person4.fName} ${person4.lName}`;
console.log(defaultName);

// The only way we can keep the default name is declaring different variables for them
const person5 = {
  _defaultFName: "Sultana", // Store default fName
  _defaultLName: "Khanom", // Store default lName
  fName: "Sultana",
  lName: "Khanom",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    return val;
  },
};

// This will print the default name "Sultana Khanom"
console.log("Hello there:", person5.fullName);
console.log((person5.fullName = "Abrar Syed"));
const anotherName = (person5.fullName = "Subrina Akhter");
console.log(anotherName);
//* Very important**************
// This is still "Sultana Khanom" as we have only returned the val and did not assign the setter value to the properties "fName" and "lName".
console.log("Hello there:", person5.fullName, " I am not changed.");

/* 
We can even try using a different method in the object.
But the change is permanent ******
*/
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
    val = val.split(" ");
    this.fName = val[0];
    this.lName = val.slice(1).join(" ");
  },
};

console.log(person6.printName()); // result: "Al Amin Khan"
person6.fullName = "Abrar Syed"; // change "fullName" setter to "Abrar Syed"
console.log(person6.printName()); // result: Abrar Syed
// This is because we assigning the "setter" value to "fName" and "lName";
