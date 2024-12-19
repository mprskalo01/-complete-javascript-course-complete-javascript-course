// This is the main importing module -- set script type to 'module' in index.html
// Exporting and Importing in ES6 Modules
console.log('Importing module');

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(price, tq);
// addToCart('bread', 5);

import * as ShoppingCart from './shoppingCart.js'; // importing everything as "class"

// ShoppingCart.addToCart('Bread', 5);
// console.log(ShoppingCart.totalPrice);

// importing default value
/*
import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';
add('Bread', 5);

add('pizza', 1);
add('bread', 2);
add('apples', 5);

console.log(cart);
// this proves that modules are a live connection
*/

// Top-Level await for modules (ES2022) - out of async function

/*
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('End fetching');

//! Top level await blocks the execution of the whole module until finished - be careful

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost(); // this is a promise

console.log(lastPost); // Promise pending

// Not very clean
// lastPost.then(post => console.log(post));

// Using top level await to resolve this issue
const lastPost2 = await getLastPost(); // waits for the promise to resolve
console.log(lastPost2); // returns the correct value
*/

// The module pattern
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  // returning a public API
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.totalPrice);
*/

// CommonJS Modules - old way of exporting and importing modules in Node.js

// Export

// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//   );
// };

// Import
// const {addToCart} = require('./shoppingCart.js')

// ? A Brief Introduction to the Command Line

// ? Introduction to NPM
/*
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone); // this is changed when original array changed

console.log(stateDeepClone); // not changed
*/

// Bundling with Parcel and NPM Scripts
