function square(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += j;
    }
  }
  return result;
}

console.log(square(3)); // result 10

/*
    res = 0, i = 1
        j = 1, res (0 + 1) = 1
    res = 1, i = 2
        j = 1, res (1 + 1) = 2
        j = 2, res (2 + 2) = 4
    res = 4, i = 3
        j = 1, res (4 + 1) = 5
        j = 2, res (5 + 2) = 7
        j = 3, res (7 + 3) = 10
*/
