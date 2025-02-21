class User {
  constructor(_age) {
    this._age = _age;
  }
  get boyesh() {
    return this._age ?? new Error("Private || invalid");
  }
  set boyesh(age) {
    if (typeof age !== "number") {
      console.error("Age must be a number");
    } else if (age <= 0 || age > 122) {
      console.error("Invalid age range");
    } else {
      this._age = Math.floor(age);
    }
  }
  printAge() {
    console.log(this.boyesh);
  }
}

const u1 = new User();
u1.printAge(); // Result (error): Private || invalid
u1.boyesh = "different data rather than number";
u1.printAge(); // Result (error): Age must be a number
u1.boyesh = 0;
u1.printAge(); // Result (error): Invalid age range
u1.boyesh = 22.4;
u1.printAge(); // Result: 22
