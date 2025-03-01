class Person {
  constructor(name, nextInLine = null) {
    // property initialization to assign constructor parameters to the object’s properties.
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

const names = ["Marium", "Arshiya", "Abrar", "Person4", "Person5"]; // Add more names here
let nextInLine = null;

// Create the linked list of people in reverse order
const people = names.reverse().map((name) => {
  const person = new Person(name, nextInLine);
  nextInLine = person;
  return person;
});

people.forEach((person) => {
  console.log(`${person._name} position is ${person.getMyPosition(person)}`);
});

const newNames = ["person6", "person7", "person8", "person9"];
names.push(...newNames);

people.forEach((person) => {
  console.log(`${person._name} position is ${person.getMyPosition(person)}`);
});
