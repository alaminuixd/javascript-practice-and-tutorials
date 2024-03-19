const letterArray = ["a", "b", "c", "d", "e"];
const arrayReduce = (arr, callback, accu) => {
  for (let i = 0; i < arr.length; i++) {
    accu = callback(accu, arr[i]);
  }
  return accu;
};

const result = arrayReduce(
  letterArray,
  (accu, item) => {
    return (accu += item);
  },
  ""
);
console.log(result);
