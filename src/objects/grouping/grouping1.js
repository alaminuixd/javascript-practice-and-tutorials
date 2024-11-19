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
