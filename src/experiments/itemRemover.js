let mainPath = "src/experiments/itemRemover.js";
const names = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];
const rmQName = names.filter((item) => item[0] !== "Q");
console.log(rmQName);
// result: ["sina", "Sam", "Ben", "Zod", "Ala"];

function myFilter(arr, callback) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

myFilter(names, (val) => {
  return val[0] !== "Q";
});

/* 
Array.map vs Array.filter
*/
const salaryArr = [50, 40, 60, 20, 400, 300, 200];
const groceSl = (amount) => {
  // 30% tax here
  return amount * 0.7;
};
const mySalary = (item) => {
  return item > 50;
};
salaryArr.map(groceSl).filter(mySalary);
