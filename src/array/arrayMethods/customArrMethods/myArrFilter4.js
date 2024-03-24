const names = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];

function filterArrayByFirstChar(arr, predicate) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
// include words start with "q" in the "Array"
function incWordStartQ(item) {
  return item[0].toLowerCase() !== "q";
}
// exclude words start with "q" in the "Array"
function rmWordStartQ(item) {
  return item[0].toLowerCase() === "q";
}
// include words start with "q" in the "Array"
function incWordStartQ(item) {
  return item[0].toLowerCase() !== "q";
}

const filteredNames1 = filterArrayByFirstChar(names, incWordStartQ);
const filteredNames2 = filterArrayByFirstChar(names, rmWordStartQ);

console.log(filteredNames1);
console.log(filteredNames2);
