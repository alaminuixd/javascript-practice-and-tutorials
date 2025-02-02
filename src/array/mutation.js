const a = [{ fName: "Khan" }, { lName: "Al Amin" }];
const b = [{ fName: "Khan" }, { lName: "Al Amin" }];

// this will change value in the original array "a"
const fNameA = (a[0].fName = "Al Amin");
const lNameA = (a[0].fName = "Khan");
const fullNameA = fNameA + " " + lNameA;
console.log(fullNameA);
// result: Al Amin Khan
console.log(a);
//! result: [{fName: "Al Amin", lName: "Khan"}]

// this wouldn't change the original array "b"
const fNameB = { ...b[0], fName: "Al Amin" };
const lNameB = { ...b[1], lName: "Khan" };
const fullNameB = fNameB + " " + lNameB;
console.log(fullNameB);
// result: Khan Al Amin
console.log(b);
//* result: [{ fName: "Khan" }, { lName: "Al Amin" }];

// we can also use "Object.assign()"
const fNameC = Object.assign({}, b[0], { fName: "Al Amin" });
const lNameC = Object.assign({}, b[1], { lName: "Khan" });
const fullNameC = fNameC + " " + lNameC;
console.log(fullNameC);
// result: Al Amin Khan
console.log(b);
// result: Khan Al Amin
