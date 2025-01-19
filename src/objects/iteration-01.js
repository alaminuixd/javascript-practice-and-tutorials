// Print object's and nested object's values
const obj1 = {
  name: "Al Amin Khan",
  father: "Syed Ahmed Khan",
  age: 38,
  address: {
    house: 33,
    city: "Dhaka",
  },
};

for (let key in obj1) {
  if (typeof obj1[key] !== "object" || obj1[key] === null) {
    console.log(key + ": " + obj1[key]);
  } else {
    console.log(key + ": ");
    const nested = obj1[key];
    for (let key2 in nested) {
      console.log(key2 + ": " + nested[key2]);
    }
  }
}
/* 
Object.entries() returns an array of a given object's own enumerable property [key, value] pairs. Each pair is represented as a two-element array.
 */
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj));
// result: [ ['a', 1], ['b', 2], ['c', 3] ]
const objArr = Object.entries(obj1);
objArr.map((item) => {
  let key = item[0];
  let val = item[0];
  if (typeof val !== "object" || val === null) {
    console.log(key + ": " + val);
  } else {
    console.log(val + ": ");
    for (let key in val) {
      console.log(val[key]);
    }
  }
});
