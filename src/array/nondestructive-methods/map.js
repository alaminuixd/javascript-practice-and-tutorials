const numbers = [1, 2, 3, 4, 5, 6];

const basicMapping1 = numbers.map((number) => {
  return number > 3;
});
// result: [4, 5, 6]

const basicMapping2 = numbers.map((number) => number < 4);
// result: [1, 2, 3]

const products = [
  { name: "mushroom", price: 20, soldOut: false },
  { name: "apple", price: 30, soldOut: false },
  { name: "banana", price: 10, soldOut: true },
  { name: "orange", price: 30, soldOut: false },
  { name: "grapes", price: 50, soldOut: true },
  { name: "carrot", price: 16, soldOut: false },
  { name: "potato", price: 12, soldOut: false },
  { name: "tomato", price: 18, soldOut: true },
  { name: "onion", price: 22, soldOut: false },
  { name: "garlic", price: 36, soldOut: false },
  { name: "broccoli", price: 40, soldOut: true },
];

const discount = products.map((product) => {
  if (product.price >= 20) {
    // This creates a new object for every product priced at 20 or more.
    return {
      name: product.name,
      price: product.price / 2, // 50% discount
      soldOut: product.soldOut,
    };
    /* 
        We can also use the spread operator like so. ** This is better approach **
        return {
            ...product,
            price: product.price,
        }
        Why is this better?
        It keeps all properties from the original object.
        If more properties are added in the future, they will automatically be included in the new object.
        It's more concise and avoids manually listing all properties.
    */
  } else {
    // Returns the original products if price is less than 20.
    return product;
  }
});

discount;

//* We can also use the spread operator like so. ** This is better approach **
const betterDiscount = products.map((product) => {
  if (product.price >= 20) {
    return {
      ...product,
      price: product.price,
    };
    /*   
        Why is this better?
        It keeps all properties from the original object.
        If more properties are added in the future, they will automatically be included in the new object.
        It's more concise and avoids manually listing all properties.
    */
  } else {
    // Returns the original products if price is less than 20.
    return product;
  }
});
