const names = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];
function filterArrayByFirstChar(arr, predicate) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

/*
 * "filterArrayByFirstChar()" has a callback parameter "predicate"
 * we will invoke an "anonymous function" in "incWordStart()" acts like the "predicat"
 * "incWordStartQ" is not a callback of filterArrayByFirstChar() here.
 * It will be used inside a anonyomus callback while invoking "filterArrayByFirstChar()"
 */
function incWordStart(item, chr) {
  return item.toLowerCase()[0] !== chr.toLowerCase();
}
function excluWordStart(item, chr) {}

/*
 * The second parameter after "names" is the anonymous callback "() =>"
 * We are using "incWordStartQ()" function inside it.
 */
const skipQWords = filterArrayByFirstChar(names, (item) => {
  console.log(item); // print: sina Sam Qoli Ben Zod Quantin Ala
  // returns Array items without "Q" at the begining.
  return incWordStart(item, "q"); // "incWordStart()" filter "Q"
});

console.log(skipQWords);
