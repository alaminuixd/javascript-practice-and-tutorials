// Following code shows how to create a pagination literally.
const generateArray = (length) => {
  const array = [];
  for (let i = 0; i <= length; i++) {
    array.push(i);
  }
  return array;
};

const data = generateArray(100); // generate an array of [1, 2, 3,......100]

const page = 0;
const start = page * 20;
const end = start + 20;
const pagination1 = data.slice(0, 20);
console.log(pagination1); // [0, 1, 2, ..., 19]

const page2 = 1;
const start2 = page2 * 20;
const end2 = start2 + 20;
const pagination2 = data.slice(start2, end2);
console.log(pagination2); // [20, 21, 22, ..., 39]

const page3 = 2;
const start3 = page3 * 20;
const end3 = start3 + 20;
const pagination3 = data.slice(start3, end3);
console.log(pagination3); // [40, 41, 42, ..., 59]

const page4 = 3;
const start4 = page4 * 20;
const end4 = start4 + 20;
const pagination4 = data.slice(start4, end4);
console.log(pagination4); // [60, 61, 62, ..., 79]

const page5 = 4;
const start5 = page5 * 20;
const end5 = start5 + 20;
const pagination5 = data.slice(start5, end5);
console.log(pagination5); // [80, 81, 82, ..., 99]
