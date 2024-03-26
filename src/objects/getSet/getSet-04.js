// A setter can change "properties value" inside an Object permenantly only when assigning these "values" in the "Setter"
// The following properties "fName" & "lName" value inside the "obj" will not change permenantly as we did not change/ reassign these values in the setter.
const obj = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    // Here we only returned the setter "val" but did not assigned it to the "obj" properties value. So this will retaren only the value we will assign temporaryly.
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
// We can see that the value is not changed parmenantly
// We can change the object propertys values assigning them to the setter parameter as follow
const obj2 = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    // first we will make an array from the values that we will add later using "join()"
    valArray = val.split(" ");
    this.fName = valArray[0];
    this.lName = valArray[1];
    // We don't have to return here anything as we've already returned "fName" & "lName" in the getter.
    // Anything we will add to the setter "fullName" will be splited into an Array values
    /* 
    If we set obj2.fullName = "Abrar Syed Khan", splite will divide them in an Array with 3 elements as follow:
    ["Abrar", "Syed", "Khan"]
    As we assign only [0] & [1] index value to the "fName" and "lName" accordingly, we will only get these two values from the setter and "Khan" will be ommited.
    We will learn how can we add the remaining value in [1] index in the next object
    */
  },
};
console.log(obj2.fullName); // result: Al Amin Khan
obj2.fullName = "Abrar Syed Khan";
// We will only get "Abrar Syed" where "Abrar" is index[0] and "Syed" is index[1]
// The "khan" is assigned to the index[2] by split method and we only assigned [0] & [1] indexes to the "fName" and "lName".
console.log(obj2.fullName); // result: Abrar Syed.

// Let's solve the problem
const obj3 = {
  fName: "Al Amin",
  lName: "khan",
  get fullName() {
    return `${this.fName} ${this.lName}`;
  },
  set fullName(val) {
    valArray = val.split(" ");
    this.fName = valArray[0];
    /* 
    As we've already assigned index[0] to the fName we will remove index[0] and add rest to the lName using slice(1).join().
    slice(1) will remove the index[0] and join() will merge rest to a single value.
    */
    this.lName = valArray.slice(1).join("");
  },
};
console.log(obj3.fullName); // result: Al Amin Khan
obj3.fullName = "Abrar Syed Khan";
console.log(obj3.fullName); // result: Abrar Syed Khan
