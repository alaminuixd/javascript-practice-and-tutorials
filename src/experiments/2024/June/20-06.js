const person = {
  name: "Al Amin",
  age: 39,
  father: "Syed Ahmed",
  // Not necessary but just for expriment I use pure function here.
  Self: function () {
    this.name = person.name;
    this.age = person.age;
    this.father = person.father;
  },
  details: () => {
    const p1 = new person.Self();
    return `I am ${p1.name}, ${p1.age} years old. My father is ${p1.father}`;
  },
};

person.details();
