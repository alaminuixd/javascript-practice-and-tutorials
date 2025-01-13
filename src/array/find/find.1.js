const family = [
  "My name is Al Amin",
  "My father name is Syed Ahmed",
  "Abrar Syed is my only son",
  "Arshiya is my only Daughter",
  "My mother name is Mamataz",
];
const res1 =
  family.find((member) =>
    member.toLowerCase().includes("Al Amin".toLowerCase())
  ) || "Not Found";
// res: My name is Al Amin
const res2 =
  family.find((member) =>
    member.toLowerCase().includes("Son".toLocaleLowerCase())
  ) || "Not found";
// res: Abrar Syed is my only son
