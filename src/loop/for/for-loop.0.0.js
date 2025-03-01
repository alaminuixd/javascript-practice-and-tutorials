const names = ["Marium", "Arshiya", "Abrar", "Person4", "Person5"];

for (let i = 0; i < names.length; i++) {
  console.log(i);
}
// result: 0, 1, 2, 3, 4

for (let i = 0; i < names.length; i++) {
  console.log(i + 1);
}
// result: 1, 2, 3, 4, 5

for (let i = names.length - 1; i >= 0; i--) {
  console.log(i + 1);
}
//result: 5, 4, 3, 2, 1
