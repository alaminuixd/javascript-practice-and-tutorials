class Person {
  constructor(name, nextInLine = null) {
    this._name = name;
    this._nextInLine = nextInLine;
  }
  getMyPosition() {
    if (this._nextInLine === null) {
      return 1;
    }
    return 1 + this._nextInLine.getMyPosition();
  }
}

const names = ["Marium", "Arshiya", "Abrar", "Person4", "Person5"];
let nextInLine = null;

// Build the list from end to start so the order stays correct
const people = [];
for (let i = names.length - 1; i >= 0; i--) {
  const person = new Person(names[i], nextInLine);
  nextInLine = person;
  people.unshift(person); // Keep people array in original order
}

people.forEach((person) => {
  console.log(`${person._name} position is ${person.getMyPosition()}`);
});

// Add new names and update the list
const newNames = ["person6", "person7", "person8", "person9"];
newNames.forEach((name) => {
  const person = new Person(name, nextInLine);
  nextInLine = person;
  people.unshift(person);
});

people.forEach((person) => {
  console.log(`${person._name} position is ${person.getMyPosition()}`);
});
