'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced object literals for subobjects and object methods
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  // },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// WHICH DATA STRUCTURE TO USE ?
/*
  If it is a simple list : Arrays or Sets
  If it is a key/value pair: Objects or Maps
  
*/

/*
// maps : iteration

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);

console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// loop
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer ?'));
const answer = 3;

// getting the key with true or false
console.log(question.get(question.get('correct') === answer));

// convert map to array

console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

*/

/*

// JAVASCRIPT MAPS - we map values to keys
// in maps the keys can have any type, even objects or arrays

const rest = new Map(); // easiest way

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // returns the whole updated map

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);

//typeof key matters

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); //true
rest.delete(2); // delete key 2
// rest.clear(); // clears the whole map
const arr = [1, 2];

rest.set(document.querySelector('h1'), 'Heading'); // selects the DOM element

rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/* 
// a set is a collection of unique values
// SET IS FOR UNIQUE VALUES, CANNOT RETRIEVE VALUES FROM SET
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Mario'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear(); // deletes all elements

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// USE CASE EXAMPLE

const staff = ['Waiter', 'Chef', 'Waiter', 'Chef', 'Waiter', 'Manager'];
const staffUnique = [...new Set(staff)]; // spread is used to make it an array
console.log(staffUnique);
console.log(new Set(staff).size);

*/

// New Operations to Make Sets Useful

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods); // foods that are in both Sets
console.log(`Intersection:`, commonFoods); // tomatoes, garlic
console.log([...commonFoods]); // converting to array using the spread operator

const italianMexicanFusion = italianFoods.union(mexicanFoods); // combines two sets without duplicates
console.log(`Union of Italian and Mexican foods:`, italianMexicanFusion);
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniqueItalianFoods = italianFoods.difference(mexicanFoods); // return Set of values that are only in the first Set
console.log('Difference Italian:', uniqueItalianFoods); // returns unique italian foods that are not in mexican foods
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexicanFoods); // so both of these remove the shared values, and keep their own

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log(uniqueItalianAndMexicanFoods); // omits the shared values (foods) in this case garlic and tomatoes

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // if the sets have no shared values -- in this case false
