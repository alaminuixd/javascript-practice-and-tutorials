const outerFunc = () => {
  console.log(
    'I am the "inner function". I have other properties that passed to "Inner Function"'
  );
  const myFamilyObj = {
    name: "Al Amin Khan",
    father: "Syed Ahmed",
    mother: "Mamataj Begum",
    printFamily() {
      return `${this.name} \n${this.father} \n${this.mother}`;
    },
  };
  const innerFunc = () => {
    return myFamilyObj;
  };
  return innerFunc;
};

// Assign "innerFunc" to "const innerFunction" from it's parent outerFunc;
const innerFunction = outerFunc();
// Now ( "innerFunction" === "innerFunc" )

// "innerFunc" return an Object so invoking it will return the object "myFamilyObj"
innerFunction();
// Result: myFamilyObj{........}

innerFunction()["name"]; // bracket notation
innerFunction().name; // dot notation
// result: Al Amin Khan

// Now I will assign the object to a variable rather than invoking it like "innerFunction()"
const myFamily = innerFunction();
// ( myFamily === myFamilyObj )
console.log(myFamily.name); // result: Al Amin Khan
console.log(myFamily.father); // result: Syed Ahmed Khan
console.log(myFamily.mother); // result: Mamataj Begum
console.log(myFamily.printFamily());
/* 
result:
    Al Amin Khan
    Syed Ahmed Khan
    Mamataj Begum
*/
