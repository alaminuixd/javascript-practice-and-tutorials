/* 
    Defination
*/
const userObj = {
  lName: "Khan",
  age: 35,
};
const userObjUpdate1 = {
  fName: "Al Amin",
  ...userObj,
};
console.log(userObjUpdate1);
// result: {fName: 'Al Amin', lName: 'Khan', age: 35}
