const myArr = [1, 2, 3, [4, 5, 6], 7, 8];

for (let i = 0; i < myArr.length; i++) {
  if (Array.isArray(myArr[i])) {
    for (let j = 0; j < myArr[i].length; j++) {
      // myArr[i].length means the nested "Array" item length
      console.log(myArr[i][j]);
    }
  } else {
    console.log(myArr[i]);
  }
}
