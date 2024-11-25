const fatherObj = {
  one: "Syed Ahmed",
  two: "Al Amin",
  three: "Azad Ali",
};

for (let key in fatherObj) {
  switch (fatherObj[key]) {
    case "Syed Ahmed":
      console.log(fatherObj[key] + " is Al Amin's father");
      break;
    case "Al Amin":
      console.log(fatherObj[key] + " is Abrar's father");
      break;
    case "Azad Ali":
      console.log(fatherObj[key] + " is Marium's father");
      break;
  }
}

/* 
Result: 
Syed Ahmed is Al Amin's father
Al Amin is Abrar's father
Azad Ali is Marium's father
*/
