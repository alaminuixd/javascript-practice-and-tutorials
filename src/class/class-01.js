/* Let's create an empty Array and push data from an "array object". */
const student1Arr = [];
const objStudent1 = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 12 },
  { name: "Charlie", age: 11 },
];
objStudent1.forEach((data) => student1Arr.push(data.name, data.age));
// The result will be an Array containing 6 items
console.log(student1Arr);
// Result: ['Alice', 10, 'Bob', 12, 'Charlie', 11]

/* Let's push  the whole Object into an empty array*/
const student2Arr = [];
const objStudent2 = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 12 },
  { name: "Charlie", age: 11 },
];
objStudent2.forEach((data) => student2Arr.push(data));
// The result will be an Array containing 3 object items.
console.log(student2Arr);

/* 
But if we want to add a label before each object array item we have to use "Class"
Expected output:
0: Student{ name: 'Alice', age: 10 }
1: Student{ name: 'Bob', age: 12 },
2: Student{ name: 'Charlie', age: 11 }
*/

class Student1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const student3Arr = [];
const objStudent3 = [
  { name: "Alice", age: 10 },
  { name: "Bob", age: 12 },
  { name: "Charlie", age: 11 },
];

objStudent3.forEach((data) =>
  student3Arr.push(new Student1(data.name, data.age))
);
console.log(student3Arr);
/* 
* important: We can only achive this (label) result using Class
Result: 
[
    0: Student{ name: 'Alice', age: 10 }
    1: Student{ name: 'Bob', age: 12 },
    2: Student{ name: 'Charlie', age: 11 }
] 
*/
