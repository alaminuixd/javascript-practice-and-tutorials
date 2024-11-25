const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Onion", category: "Vegetable" },
  { name: "Orange", category: "Fruit" },
  { name: "Lettuce", category: "Vegetable" },
];

const groupedItems = items.reduce((accu, item, index) => {
  const category = item.category;
  if (!accu[category]) {
    accu[category] = {}; // Use an object instead of an array
  }
  // Use the index to dynamically assign keys (e.g., 'one', 'two', etc.)
  accu[category][`one`] = accu[category].one || item.name; // Assign the first item
  accu[category][`two`] = accu[category].two || item.name; // Assign the second item
  return accu;
}, {});

console.log(groupedItems);

// Breaking down the above
const obj = {}; // Create an empty object
const fruits = "fruits"; // Define the key 'fruits'
const vegetables = "vegetables"; // Define the key 'vegetables'

// Dynamically create objects for fruits and vegetables with properties like 'one', 'two'
obj[fruits] = {};
obj[vegetables] = {};

// Add items to the fruits object with keys 'one', 'two'
obj[fruits].one = "mango";
obj[fruits].two = "banana";

// Add items to the vegetables object with keys 'one', 'two'
obj[vegetables].one = "radish";
obj[vegetables].two = "guard";

console.log(obj);
