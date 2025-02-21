const arr1 = [1, 2, 3, 4, 5];
const sum = arr1.reduce((a, c) => {
  // with a primitive value accumulator we can just sum using "addition" and return it
  return a + c;
}, 0);
console.log(sum);

const sumObj = arr1.reduce(
  (a, c) => {
    // for the accumulator as an object we need to use "addition assignment" operator
    a.total += c;
    // and return later
    return a;
  },
  { total: 0 }
);
console.log(sumObj.total);

const arr2 = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }];
const sumObj2 = arr2.reduce(
  (a, c) => {
    a.total += c.num;
    return a;
  },
  { total: 0 }
);
