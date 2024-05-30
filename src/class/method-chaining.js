class Dog {
  constructor(name) {
    this.name = name;
    this.age = 10; // Initial age set to 10
    this.updateNum(); // Increment the age by 5 from "for loop"
  }

  updateNum() {
    //this.age += 1; // Increment the age by 1
    for (let i = 0; i < 5; i++) {
      this.age += i;
    }
  }

  details() {
    return `The dog name is ${this.name} which is ${this.age} years old`;
  }
}

const d1 = new Dog("Viki");
d1.details();

/* 
Example two
*/
class Dog2 {
  constructor(name) {
    this.name = name;
    this.age = 10; // Initial age set to 10
    this.updateNum(); // Increment the age by 1
  }

  updateNum() {
    this.age += 1; // Increment the age by 1
  }

  details() {
    return `The dog name is ${this.name} which is ${this.age} years old`;
  }
}

const d2 = new Dog2("Viki");
d2.details(); // result: The dog name is Viki which is 11 years old
d2.details(); // result: As same as Above
// Why?
// Because we are calling the function inside the constructor and everytime we are calling the method "details()" it's setting the initial value to 10 from the constructor and then updateing by 1. so it will never be incremented more than 1 no metter how many time we invoke the method "d2.details()".

/* 
If you want to increase the number everytime you call the method you have to invoke the function inside the function "details()"
*/
class Dog3 {
  constructor(name) {
    this.name = name;
    this.age = 10; // Initial age set to 10
  }

  updateNum() {
    this.age += 1; // Increment the age by 1
  }

  details() {
    this.updateNum(); // Increment the age by 1 everytime
    return `The dog name is ${this.name} which is ${this.age} years old`;
  }
}

const d3 = new Dog3("Viki");
d3.details(); // result: The dog name is Viki which is 11 years old
d3.details(); // result: The dog name is Viki which is 12 years old
