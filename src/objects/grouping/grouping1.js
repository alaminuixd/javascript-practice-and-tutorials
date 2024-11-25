const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

const groupedItems = items.reduce((accu, item) => {
  const category = item.category;
  if (!accu[category]) {
    accu[category] = [];
  }
  accu[category].push(item.name);
  return accu;
}, {});

groupedItems;

// Broken version
const catFruit = "Fruits";
const catVegetable = "Vegetable";
const accu = {};
if (!accu[catFruit]) {
  accu[catFruit] = [];
}
if (!accu[catVegetable]) {
  accu[catVegetable] = [];
}
accu[catFruit].push("Apple", "Mango", "Grapes");
accu[catVegetable].push("Carrot", "Broccoli", "Beans");
console.log(accu);
