const state = {
  cart: [
    { id: 1, name: "Laptop", price: 50, quantity: 1 },
    { id: 2, name: "Phone", price: 20, quantity: 1 },
    { id: 3, name: "Shirt", price: 5, quantity: 1 },
    { id: 4, name: "Pen Drive", price: 10, quantity: 1 },
  ],
  total: 135,
};
/*
map always returns an array, and the items in the new array are whatever you
return from the callback function for each element.
*/
// in the following "item" is each element which is "objects" of the "state.cart" array.
// when we return them in the callback, they "items/ objects" will be returned inside an array.
const eachItem = state.cart.map((item) => item);
// we can check if each item is an object using "forEach" method
state.cart.forEach((item) => console.log(item));
// we can also return each object property or property value like so
const cartItemsId = state.cart.map((item) => item.id);
const cartItemsPrice = state.cart.map((item) => item.price);
const cartItemsName = state.cart.map((item) => item.name);
// update item's "quantiy" in the "state.cart array"
const updateQuantity = state.cart.map((item) => ({
  ...item,
  quantity: item.quantity + 1,
}));

// update all items name in the cart based on condition
const updateNames = state.cart.map((item) => {
  return item.name === "Laptop"
    ? { ...item, name: `Assuse ${item.name}` }
    : item.name === "Phone"
    ? { ...item, name: `Sumsung ${item.name}` }
    : item.name === "Shirt"
    ? { ...item, name: `Cats Eye ${item.name}` }
    : item.name === "Pen Drive"
    ? { ...item, name: `Twinmos ${item.name}` }
    : item;
});
