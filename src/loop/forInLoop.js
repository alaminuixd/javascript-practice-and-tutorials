// With "for in" loop we can access both "Array" and "Object"
const arr1 = [1, 2, 3, 4, 12, 13];
for (let key in arr1) {
  console.log(arr1[key]);
}
// result: 1, 2, 3, 4, 12, 13

const obj2 = {
  name: "Al Amin",
  father: "Syed Ahmed",
  mother: "Mamataj Begum",
};
for (let key in obj2) {
  console.log(obj2[key]);
}
// result: Al Amin, Syed Ahmed, Mamataj Begum
