/* 
Defination:
A closure is like a backpack that the inner function carries, holding onto values from its parent function's scope.
*/

const parent = () => {
  let recipient = "Al Amin";
  return (amount) => {
    return `${recipient} will get ${amount}`;
  };
};

const recipient1 = parent();
const theClosure = recipient1(2000);
console.log(theClosure);

/* 
In the above funciton "return () => {}" is a closure.
It's because it encloses the variable "recipient" from the parent function scope.
*/

// A common and practical use of closures is in creating private variables and methods in JavaScript.
function createCounter() {
  let count = 0; // This variable is private to the createCounter function
  return {
    increment: function () {
      count++;
      console.log("Count:", count);
    },
    decrement: function () {
      count--;
      console.log("Count:", count);
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1

console.log(counter.getCount()); // Output: 1
