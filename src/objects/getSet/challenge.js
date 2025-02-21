/* 
Challenge 1 (Basic)
Create an object user with a property _age. Add a getter called age that returns _age.

Try it, and I'll check your solution before giving the next one! 🚀
*/

class User {
  constructor(_age) {
    this._age = _age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }
  printAge() {
    console.log(this.age);
  }
}

const u1 = new User(28);

u1.printAge(); // result: 28

u1.age = 33; // set age to 33

u1.printAge(); // result: 33

/* 
Challenge 2 (Intermediate)
Modify your User class so that the setter only allows setting age if it's a positive number. If a negative number or zero is assigned, it should not update _age and should print "Invalid age".
*/
class User2 {
  constructor(_age) {
    this._age = _age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (age > 0) {
      this._age = age;
    } else {
      console.log("Invalid age");
    }
  }
  printAge() {
    console.log(this._age);
  }
}

const u1 = new User2(28);
u1.printAge(); // 28

u1.age = 33;
u1.printAge(); // 33

u1.age = -5; // Invalid age
u1.printAge(); // 33 (unchanged)

/* 
Challenge 3 (Advanced)
Modify your User class so that:

The age setter only accepts numbers. If a non-number is assigned, log "Age must be a number".
The age setter only allows values between 1 and 120. If out of range, log "Invalid age".
*/
class User3 {
  constructor(_age) {
    this._age = _age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age !== "number") {
      console.error("age must be a number");
    } else if (age <= 0 || age > 120) {
      console.error("Invalid age");
    } else {
      this._age = age;
    }
  }
  printAge() {
    console.log(this._age);
  }
}

const u1 = new User3(28);

/* 
Challenge 4 (Expert Level)
Modify your User class so that:

The getter should return "Private" if _age is not set.
The setter should round down age if a decimal number is assigned (e.g., 25.9 → 25).
*/
class User4 {
  constructor(_age) {
    this._age = _age;
  }
  get age() {
    return this._age ?? "Private"; // If _age is undefined, return "Private"
  }
  set age(age) {
    if (typeof age !== "number") {
      console.error("Age must be a number");
    } else if (age <= 0 || age > 120) {
      console.error("Invalid age");
    } else {
      this._age = Math.floor(age); // Round down decimals
    }
  }
  printAge() {
    console.log(this.age);
  }
}

const u1 = new User4();
console.log(u1.age); // "Private"

u1.age = 25.9;
u1.printAge(); // 25 (rounded down)
