/* 
    Defination
*/
const userObj = {
  lName: "Khan",
  age: 35,
};
const userObjUpdate1 = {
  fName: "Al Amin",
  ...userObj, // spread userObj
};
console.log(userObjUpdate1);
// result: {fName: 'Al Amin', lName: 'Khan', age: 35}

/* *******************************
Conbain/ Marge two object
***********************************/
const obj1 = {
  name: "Al Amin",
  father: "Syed Ahmed",
};

const obj2 = {
  mother: "Mamataz Begum",
  age: 38,
};

const obj3 = {
  ...obj1,
  ...obj2,
};
