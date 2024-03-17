const outerFunction = () => {
  console.log(
    'I am the "inner function". I have other properties that passed to "Inner Function"'
  );
  // closure start
  const myFamilyObj = {
    name: "Al Amin",
    father: "Syed Ahmed",
    mother: "Mamataj Begum",
    get printFamily() {
      return `${this.name} \n${this.father} \n${this.mother}`;
    },
    set printFamily(val) {
      const [name, father, mother] = val;
      this.name = name;
      this.father = father;
      this.mother = mother;
    },
  };
  const innerFunction = () => {
    const myFamily = myFamilyObj;
    return myFamily;
  };
  return innerFunction;
  //closure End
};

const innerFunction = outerFunction();
// myFamily is now an object which is created from the closure between "outerFunction" and "innerFunction"
const myFamily = innerFunction();
// "myFamily object has GETTER & SETTER "printFamily"
console.log(myFamily.printFamily);
// Set new name to "printFamily" GETTER
myFamily.printFamily = ["Sabrina Akhter", "Selim Mia", "Monjuara Begum"];
// Now printFamily has new family array
console.log(myFamily.printFamily);
