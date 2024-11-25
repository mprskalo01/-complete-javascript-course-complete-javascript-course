'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  // },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


/*
// REST PATTERN AND PARAMETERS

// 1) Destructuring
// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(pizza, risotto, otherFood);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// 2) functions
// Rest paramaters
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x); // spreading

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/*
// SPREAD OPERATOR (...) -- it pulls the items out of the array
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// merge arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects

const str = 'Mario';
const letters = [...str, , 'P.'];
console.log(letters);

// console.log(`${...str}`); doesnt work because not expected, spread only in arrays or functions

// Real world example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1 ?`),
//   prompt(`Ingredient 2 ?`),
//   prompt(`Ingredient 3 ?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients); // this is good

// Object spread

const newRestaurant = { founding: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

/*
restaurant.orderDelivery({
  time: '23:30',
  address: 'Gradnici 91',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Gradnici 91',
  starterIndex: 1,
});

// DESTRUCTURIN OBJECTS

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories); // same names

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); // different names

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // have to wrap in parenthasis
// console.log(a, b); // 23, 7

// nested object destructuring
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
// DESTRUCTURING ARRAYS
/*
const numbers = [2, 3, 4];

const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

const [x, y, z] = numbers;
// console.log(x, y, z);
// console.log(numbers);

let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// w/o destructure
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// SWITCHING VARIABLES
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

const [starterMeal, mainMeal] = restaurant.order(2, 0);
console.log(starterMeal, mainMeal);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
*/
