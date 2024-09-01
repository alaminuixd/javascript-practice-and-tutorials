// take out only matched items between two arrays
// ****************************** Approach 1 *************************
const arr1 = [
  "Rio",
  "Saiful",
  "Pinki",
  "Mila",
  "Aliza",
  "Jhon",
  "Susan",
  "George",
];
const arr2 = [
  "Jhon",
  "Mila",
  "Rio",
  "Susan",
  "Jubaer",
  "Malisa",
  "Sifat",
  "Aliza",
];

function getMatched(arrOne, arrTwo) {
  const nameArr = [];
  const nameObj = {};

  for (let i = 0; i < arrOne.length; i++) {
    const name = arrOne[i];
    if (nameObj[name]) {
      nameObj[name] += 1;
    } else {
      nameObj[name] = 1;
    }
  }
  arrTwo.forEach((item) => {
    if (nameObj[item]) {
      nameArr.push(item);
    }
  });

  return nameArr;
}

const matchedNames = getMatched(arr1, arr2);

// ****************************** Approach 2 *************************

const set1 = new Set(arr1);

const matched = arr2.filter((item) => set1.has(item));

// ****************************** Approach 3 *************************
const matchedResult = arr1.filter((item) => arr2.includes(item));
