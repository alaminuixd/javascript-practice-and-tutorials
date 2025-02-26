// Constructor function to create a person with a name and a reference to the next person in line
function Person(name, nextInLine = null) {
  this._nextInLine = nextInLine;
  this._name = name;
}

// Recursive function to find the position of a person in the line
function getMyPos(person) {
  if (person._nextInLine === null) {
    return 1;
  }
  return 1 + getMyPos(person._nextInLine);
}

// Array of names representing people in line
const names = ["Marium", "Arshiya", "Abrar", "Person4", "Person5"]; // Add more names here
let nextInLine = null;

// Create the linked list of people in reverse order
const people = names.reverse().map((name) => {
  const person = new Person(name, nextInLine);
  nextInLine = person;
  return person;
});

// Get and display positions of people in line
people.reverse().forEach((person) => {
  console.log(`${person._name} position is ${getMyPos(person)}`);
});
