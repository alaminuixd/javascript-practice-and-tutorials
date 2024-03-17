// This Turorial From Dickson | Free Code Camp
const timF = () => {
  let start = Date.now();
  while (Date.now() - start < 5000) {
    // do nothing
  }
  return "Started";
};

console.log("starting...");
console.log(timF());
console.log("finishing......");

// Script 2
console.log("Start of script 2");

setTimeout(function () {
  console.log("2nd timeout completed");
}, 2000);

console.log("End of script 2");

// script 3
const fatchData = (cb) => {
  setTimeout(() => {
    let me = { name: "Al Amin", age: 35 };
    return cb(me);
  }, 2000);
};
