const createCounter = () => {
  let number = 0;
  const incNumber = () => {
    number++;
    return number;
  };
  const decNumber = () => {
    number--;
    return number;
  };
  return (objCount = {
    incNum: incNumber,
    decNum: decNumber,
  });
};
// Let's create two independent counters "count1" and "count2".
// We will use "count1" to increment and "count2" to decrement "number".
const count1 = createCounter();
const count2 = createCounter();

// Now, we will increase the number and console it 3 times using independent "count1".
// number will start from 0 because of separate/ independent "count1"
console.log(count1.incNum()); // result: 1
console.log(count1.incNum()); // result: 2
console.log(count1.incNum()); // result: 3

// Let's decrease it for 3 times similar way using separate/ independent "count2"
console.log(count2.decNum()); // result: -1
console.log(count2.decNum()); // result: -2
