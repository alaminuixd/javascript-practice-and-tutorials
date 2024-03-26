const createH1 = (elemParent, elemClass, elemId) => {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", elemId);
  h1.setAttribute("class", elemClass);
  return elemParent.appendChild(h1);
};
class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }
  get fullName() {
    return `${this.fName} ${this.lName}`;
  }
  set fullName(val) {
    const nameParts = val.split(" ");
    this.fName = nameParts[0];
    this.lName = nameParts.slice(1).join(" ");
    /* 
    The "slice" method in JavaScript doesn't include the element at the ending index.
    NameParts.slice(1) would include all elements starting from index 1 (inclusive) to the end of the array. 
    So, nameParts.slice(1) would include "Syed" and "Khan", as well as any other elements at index 1 or beyond.

    Then, the .join(" ") method will join all elements from index 1 (resulting from .slice(1)) of the array
    into a single string, with each element separated by the specified separator, in this case, the space: " ".
*/
  }
}
const p1 = new Person("Al Amin", "Khan");
console.log(p1.fullName);
//document.getElementById("h1One").innerText = p1.fullName;
const homeMain = document.getElementById("home-main");
homeMain.getElementsByTagName("h1")[0].innerText = p1.fullName;

p1.fullName = "Abrar Syed Khan";
createH1(homeMain, "mainH1-2 text-center", "mainH1-2").innerText = p1.fullName;

/* *************************************************
 ******** Another GETTER & SETTER using class *******/

class Actor {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  /* 
 we cannot add "GETTER" with an existing property:
 following will give an Error as we already have "first" in the constructor
 get first () {
  console.log("Bla Blaa Blaaa..");
 }
 */
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(newName) {
    if (!newName) throw "Name can't be empty";
    const [first, ...last] = newName.split(" ");
    this.first = first;
    this.last = [...last].join(" ");
  }
  /* 
  ## Short form using ternary operator
  set fullName(newName) {
    this.first = newName ? newName.split(" ")[0] : "";
    this.last = newName ? newName.split(" ").slice(1).join(" ") : "";
  }
  */
}

const actor1 = new Actor("Al Amin", "Khan");
createH1(homeMain, "mainH1-3 text-center", "mainH1-3").innerText =
  actor1.fullName;
actor1.fullName = "Md. Abrar Syed Khan";
createH1(homeMain, "mainH1-4 text-center", "mainH1-4").innerText =
  actor1.fullName;
console.log((actor1.fullName = "")); // This will give Error: "Name can't be empty"
