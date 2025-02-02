/* 
  The `find()` method is used to search through an array and return the "first" element that meets a condition. 
  It stops searching as soon as it finds the "first" match. If no match is found, it returns `undefined`. 
  In this example, we are using `find()` to locate a family member's information based on a keyword.

  The search is case-insensitive due to `toLowerCase()` being used.

*/

const family = [
  "My name is Al Amin",
  "My father name is Syed Ahmed",
  "Abrar Syed is my only son",
  "Arshiya is my only Daughter",
  "My mother name is Mamataz",
];

// Search for "Al Amin" in the array
const res1 =
  family.find((member) =>
    member.toLowerCase().includes("Al Amin".toLowerCase())
  ) || "Not Found";
// res: "My name is Al Amin"

// Search for "Son" in the array
const res2 =
  family.find((member) =>
    member.toLowerCase().includes("Son".toLocaleLowerCase())
  ) || "Not found";
// res: "Abrar Syed is my only son"
