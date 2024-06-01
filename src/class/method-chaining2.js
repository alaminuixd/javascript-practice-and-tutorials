class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.messages = [];
  }

  printName() {
    let message = `My name is ${this.name} and I am ${this.age} years old.`;
    this.messages.push(message);
    return this;
  }

  congrate() {
    let message = `Congratulations`;
    this.messages.push(message);
    return this;
  }

  getMessages() {
    return this.messages;
  }
}

const p1 = new Person("Al Amin", 28);
/* 
    ! printName() and congrate() methods are called "Fluent Interface Methods"
    To get any output from inside any of these functions must call any of them or both of them first.
    if we call p1.printName();
    then call "theMessages()" it will only print "message" inside "printName()" method. 
*/
p1.printName().congrate();

const theMessage = p1.getMessages();
theMessage.forEach((message) => console.log(message));
