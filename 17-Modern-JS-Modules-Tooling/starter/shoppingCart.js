// Exporting module
console.log('Exporting module');

// Blocking code for top-level await demonstration
/*
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching users');
*/

// we have to export variables, otherwise they are scoped to this module only
// named exports

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { cart, totalPrice, totalQuantity as tq };

// default exports

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
