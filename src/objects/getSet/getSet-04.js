// A setter can change properties' values inside an object permanently only when assigning these values in the setter.
// The following properties, "fName" & "lName" inside "obj", will not change permanently as we did not reassign these values in the setter.
const obj = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    // Here we only return the setter "val" but do not assign it to the "obj" properties' values. So, this will only temporarily hold the assigned value.
    return val;
  },
};

console.log(obj.fullName); // result: Al Amin Khan
obj.fullName = "Ruhul Amin Khan"; // reassigned: Ruhul Amin Khan
console.log(obj.fullName); // but the result is still: Al Amin Khan
// Following will work as we assigned and printed at the same time.
console.log((obj.fullName = "Ruhul Amin Khan"));
// Following will also work as we stored the reassigned value in the new variable res2.
let res2 = (obj.fullName = "Ruhul Amin Khan");
console.log(res2); // result: Ruhul Amin Khan
// but if we print it directly it will return the default value "Al Amin"
console.log(obj.fullName); // result: Al Amin Khan
// We can see that the value is not changed permanently
// We can change the object properties' values by assigning them to the setter parameter as follows:
const obj2 = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    // First, we will make an array from the values that we will add later using "join()".
    const valArray = val.split(" ");
    this.fName = valArray[0];
    this.lName = valArray[1];
    // We don't have to return anything here as we've already returned "fName" & "lName" in the getter.
    // Anything we will add to the setter "fullName" will be split into an array of values.
    /* 
      If we set obj2.fullName = "Abrar Syed Khan", split will divide them into an array with 3 elements as follows:
      ["Abrar", "Syed", "Khan"]
      As we assign only [0] & [1] index values to "fName" and "lName" accordingly, we will only get these two values from the setter, and "Khan" will be omitted.
      We will learn how we can add the remaining value in [1] index in the next object.
      */
  },
};
console.log(obj2.fullName); // result: Al Amin Khan
obj2.fullName = "Abrar Syed Khan";
// We will only get "Abrar Syed" where "Abrar" is index[0] and "Syed" is index[1].
// The "khan" is assigned to index[2] by the split method, and we only assigned [0] & [1] indexes to "fName" and "lName".
console.log(obj2.fullName); // result: Abrar Syed.

// Let's solve the problem
const obj3 = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    const valArray = val.split(" ");
    this.fName = valArray[0];
    /* 
      As we've already assigned index[0] to fName, we will remove index[0] and add the rest to lName using slice(1).join().
      slice(1) will remove index[0], and join() will merge the rest into a single value with a space.
      */
    this.lName = valArray.slice(1).join("");
  },
};
console.log(obj3.fullName); // result: Al Amin Khan
obj3.fullName = "Abrar Syed Khan";
console.log(obj3.fullName); // result: Abrar Syed Khan

// We can also do this using the spread operator
const obj4 = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    // "first" represents the first element (index[0]) of the split value, while "...last" represents the remaining elements as an array.
    const [first, ...last] = val.split(" ");
    this.fName = first;
    this.lName = [...last].join(" ");
  },
};
console.log(obj3.fullName); // result: Al Amin Khan
obj3.fullName = "Abrar Syed Khan";
console.log(obj3.fullName); // result: Abrar Syed Khan
