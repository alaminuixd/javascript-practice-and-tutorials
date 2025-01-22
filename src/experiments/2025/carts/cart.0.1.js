const state = {
  cart: [
    { id: 1, name: "Laptop", price: 50, quantity: 1 },
    { id: 2, name: "Phone", price: 20, quantity: 2 },
    { id: 3, name: "Shirt", price: 5, quantity: 1 },
    { id: 4, name: "Pen Drive", price: 10, quantity: 1 },
  ],
  total: 105,
};
const updatedNameState = {
  ...state,
  cart: state.cart.map((item) => {
    return item.name === "Laptop"
      ? { ...item, name: `Assuse ${item.name}` }
      : item.name === "Phone"
      ? { ...item, name: `Sumsung ${item.name}` }
      : item.name === "Shirt"
      ? { ...item, name: `Cats Eye ${item.name}` }
      : item.name === "Pen Drive"
      ? { ...item, name: `Twinmos ${item.name}` }
      : item;
  }),
  total: state.total,
};
// Update quantity and recalculate total
const updatedQuantityState = {
  ...updatedNameState,
  cart: updatedNameState.cart.map((item) => {
    return item.id === 3 ? { ...item, quantity: item.quantity + 2 } : item;
  }),
  total: updatedNameState.cart.reduce((sum, curr) => {
    const updatedQuantity = curr.id === 3 ? curr.quantity + 2 : curr.quantity;
    return sum + curr.price * quantity;

    /* return (
      sum + curr.price * (curr.id === 3 ? curr.quantity + 2 : curr.quantity)
    ); */
  }, 0),
};
