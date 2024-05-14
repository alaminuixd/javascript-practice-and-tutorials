/*
All the ways to extend an object in JavaScript
*/
const Car = {};
//* 1) Adding properties: Simply add new properties to an existing object using dot notation or square bracket notation.
Car.name = "Mazda";
// or
Car["ownerName"] = "Al Amin Khan";
//* 2) Object.defineProperty: Define new properties or modify existing ones with more control over their behavior.
Object.defineProperty(Car, "city", {
  value: "Dhaka",
  writable: true,
  enumerable: true,
  configurable: true,
});

//* 3) Object.defineProperties: Define multiple properties at once with specific attributes.
Object.defineProperties(Car, {
  model: {
    value: 2022,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  origin: {
    value: "Japan",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  // Other properties...
});
//* 4) Inheritance: Extend an object by inheriting properties and methods from another object using prototypes or modern JavaScript syntax like classes.
class Car1 extends Car {
  constructor() {
    super();
    // Additional constructor logic if needed
  }
  // Additional methods and properties specific to Car1
}

//* 5) Object.create(): Create a new object with the specified prototype object and properties.
const Car1 = Object.create(Car);
Car1.firstHand = true;

//* 6) Spread operator (...): Create a new object by combining properties from multiple objects.
const Car1 = { ...Car, boughtYear: 2024 };
//* 7) Object.assign(): Copy the values of all enumerable own properties from one or more source objects to a target object.
const Car1 = Object.assign({}, Car, { wheel: 4 });
