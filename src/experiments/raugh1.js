const numArr1 = [1, 2, 3, 4, 5];
// this is "false" cause it's the returned arr itself
(nas1 = [...numArr1].slice(-1)) === 5;
// this is "true" cause ue are selecting [0] index of the arr
(nas1 = [...numArr1].slice(-1))[0] === 5;

// select the last item of an Array using array length
const numArLast = numArr1[numArr1.length - 1];
console.log(numArLast);
