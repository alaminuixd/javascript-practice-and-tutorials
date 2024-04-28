const obj3 = {};

Object.defineProperty(obj3, "name", {
  value: "Al Amin",
  writable: true, // Whether the property can be changed
  enumerable: true, // Whether the property will be iterated over in for...in loops
  configurable: true, // Whether the property can be deleted or its attributes changed
});

Object.defineProperty(obj3, "father", {
  value: "Syed Ahmed",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(obj3, "mother", {
  value: "Mamataz Begum",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(obj3, "sister", {
  value: "Syeda Sultana",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(obj3, "brother", {
  value: "Ruhul Amin Khan",
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(obj3);
