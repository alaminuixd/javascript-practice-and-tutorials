function PersonConstructor(person, nextInLine = null) {
  // Assigns the "person" and "nextInLine" to the "instance" using "this._person"
  // Here "this" is the "instance" and "._person" and "._nextInLine" are it's property
  this._person = person;
  this._nextInLine = nextInLine;
}

function getMyPos(person) {
  // Returns 1 if there's no one next in line
  if (person._nextInLine === null) {
    return 1;
  }
}

// Creates a person with no one next in line
const p3 = new PersonConstructor("Al Amin");

// Returns 1 because p3._nextInLine is null
console.log(getMyPos(p3));
