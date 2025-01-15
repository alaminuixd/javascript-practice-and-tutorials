// Efficiently Adding Items to an Array Based on Their Type in JavaScript
const addItems = (newItem, existingItems = []) => {
  // If newItem is an array, spread it into existingItems; otherwise, add the single item
  return Array.isArray(newItem)
    ? [...existingItems, ...newItem]
    : [...existingItems, newItem];
};

const singleItem = "pencil"; // Single name
const multipleItems = ["chocolate", "juice", "pencil"]; // Array of names

const allItems = addItems(singleItem); // Add single name
const updatedItems = addItems(multipleItems, allItems); // Spread array of names

console.log(updatedItems);
// Output: ["pencil", "chocolate", "juice", "pencil"]
