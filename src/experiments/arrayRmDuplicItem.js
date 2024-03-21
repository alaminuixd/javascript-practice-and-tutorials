/* 
Outer loop 1st iteration:
    Inner loop 1st iteration:
        merged[0].id === arrObj2[0].id: | (1 === 2) (found = false)
    Inner loop 2nd iteration:
        merged[1].id === arrObj2[0].id: | (2 === 2) (found = true)
    After this inner loop, found remains true and it do not execute code in if(!found)

Outer loop 2nd iteration:
    Inner loop 1st iteration:
        merged[0].id === arrObj2[1].id: | (1 === 3) (found = false)
    Inner loop 2nd iteration:
        merged[1].id === arrObj2[1].id: | (2 === 3) (found = false)
    After this inner loop, found changes to false ad none of them true.
    it now get into the if(!found){
        and pushes the arrObj2[1] into merged.
    }
so now merged is:
[
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
]

merged: { 
    * important: because of passing "j" in merged Array of "inner loop"
    * merged[j] in inner loop will compare like so: 
    * inner loop 1: [0] [1] & inner loop 2: [0] [1]
}
arrObj2: { 
    * important: because of passing "i" in arrObj2 Array of "inner loop"
    * arrObj2[i]in inner loop will compare like so: 
    * inner loop 1: [0] [0] & inner loop 2: [1] [1]
}
{

}
{   
    inner loop 1st in
    [0] -> j === [0] -> i
    [1] -> j === [0] -> i
    inner loop 2nd in
    [0] -> j === [1] -> i
    [1] -> j === [1] -> i
}

*/
const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Bob" },
];
function mergeArrayOfObjects(arrObj1, arrObj2) {
  let merged = [...arrObj1];
  for (let i = 0; i < arrObj2.length; i++) {
    let found = false;

    for (let j = 0; j < merged.length; j++) {
      if (merged[j].id === arrObj2[i].id) {
        found = true;
        break;
      }
    }

    if (!found) {
      merged.push(arrObj2[i]);
    }
  }

  return merged.sort((a, b) => a.id - b.id);
}

const one = mergeArrayOfObjects(array1, array2);
console.log(one);

/* 
const array = [
    { id: 3, name: "Alice" },
    { id: 1, name: "Bob" },
    { id: 2, name: "John" }
];
array.sort((a, b) => a.id - b.id);

code in "shor()" will loop in 1st pair each time. 

loop 1:
    sequence: ids: 3, 1, 2
    first pair: (a/3, b/1) SO, 3 - 1 = 2
    result (2) is positive so "b/1" will come before "a/3":
    sequence: 1, 3, 2
loop 2:
    sequence: ids: 1, 3, 2
    first pair: (a/3, b/2) SO, 3 - 2 = 1
    result (1) is positive so "b/2" will come fist:
    sequence: 1, 2, 3
As there is not more pair the result will be:
    1, 2, 3
*/
