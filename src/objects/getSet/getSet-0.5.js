// Change "single property" of an object with simple gettter and setter
obj1 = {
  name: "al amin",
  father: "syed ahmed",
  get() {
    return this.name;
  },
  set(val) {
    this.name = val;
  },
};

console.log(obj1.name); // result: al amin
obj1.name = "ruhul amin";
console.log(obj1.name); // result ruhul amin

/* *********************************************
Change property using "Object.defineProperty"
********************************************* */
const obj2 = {
  name: "Al Amin",
  father: "Syed Ahmed",
};
obj2.mother = "Mamataz"; // new property "mother" added

Object.defineProperty(obj2, "mother", {
  // "get" & "set" for only "mother" property
  get() {
    return this.motherVal; // "motherVal" points to "mother"
  },
  set(val) {
    this.motherVal = val;
  },
});
