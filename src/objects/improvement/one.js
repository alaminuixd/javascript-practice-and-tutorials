// simple approach
const myObj = {
  name: "Al Amin Khan",
  age: 38,
  children: [
    { name: "Abrar Syed", age: 6 },
    { name: "Arshiya Amin", age: 3 },
  ],
  showDetails() {
    const cn = this.children.length;
    const c1 = this.children[0].name;
    const c2 = this.children[1].name;
    return `My Name is ${this.name} I have ${cn} kids. They are 1. ${c1} and 2. ${c2}`;
  },
};

/* 
better appraoch
Why is this better?
1. Scalability – Works with any number of children, not just 2.
2. Less Hardcoding – No need to manually access children[0] or children[1].
3. Cleaner & More Readable – Uses map() for better structure.
*/
const myObj2 = {
  name: "Al Amin Khan",
  age: 38,
  children: [
    { name: "Abrar Syed", age: 6 },
    { name: "Arshiya Amin", age: 3 },
  ],
  showDetails() {
    const childrensName = this.children
      .map((child, index) => {
        return `${index + 1}. ${child.name} who is ${child.age} yers old.`;
      })
      .join(" and ");
    return `My Name is ${this.name} I have ${this.children.length} kids. They are ${childrensName}`;
  },
};

myObj2.showDetails();

// way better approach
const myObj3 = {
  name: "Al Amin Khan",
  age: 38,
  children: [
    { name: "Abrar Syed", age: 6 },
    { name: "Arshiya Amin", age: 3 },
  ],
  formatChild(child, index) {
    return `${index + 1}. ${child.name} who is ${child.age} years old`;
  },
  showDetails() {
    const childrensName = this.children.map(this.formatChild).join(" and ");
    return `My Name is ${this.name}. I have ${this.children.length} kids. They are ${childrensName}.`;
  },
};

console.log(myObj3.showDetails());

// extend
const myObjCp = Object.create(myObj3);
myObjCp.children = [...myObj3.children, { name: "Amina Khan", age: 1 }];
myObjCp.showDetails();
