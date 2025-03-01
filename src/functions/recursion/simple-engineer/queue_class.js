// class components
// Prove that "_nextInLine" is an instance of the main class "Person"
class InstPerson {
  constructor(name, nextInLine) {
    this._name = name;
    this._nextInLine = nextInLine;
  }
  print() {
    console.log(this._nextInLine instanceof InstPerson);
  }
}
const instP1 = new InstPerson("Abrar");
const instP2 = new InstPerson("Marium", instP1);
instP1.print(); // result: false
instP2.print(); // result: true

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
