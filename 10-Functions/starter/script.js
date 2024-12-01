'use strict';

/*

// CLOSURES & MORE CLOSURES

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function -- it re-assigns the closures
h();
f();
console.dir(f);

// Example 2
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    // this is a function with closure
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 100; // showing that closure has priority over the global scope

boardPassangers(180, 3);

/*
// Immediately Invoked Functions Expressions (IIFE) -- invented to hide some private variables inside of scope

const runOnce = function () {
  console.log(`This will never run again`);
};
// runOnce();

// IIFE
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})(); // this is how we call a function without saving

// IIFE
(() => console.log(`This will never run again`))();


/*

// Call and apply methods + BIND METHOD
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){} //
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Mario Prskalo');
lufthansa.book(577, 'Mike Smith');

const book = lufthansa.book; // function

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// book(23, 'Sarah williams'); // undefined because 'this' keyword is undefined

// call sets 'this' keyword to first argument
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

// APPLY METHOD - difference is it takes an array with arguments, not that used
const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); // old way - new way we use spread operator with call
book.call(swiss, ...flightData); // modern way
console.log(swiss);

// BIND METHOD

// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // we bind the argument aswell, so it is always for flight 23
bookEW23('Mario Prskalo');
bookEW23('Martha Cooper');
console.log(eurowings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

const buyButton = document.querySelector('.buy');
// buyButton.addEventListener('click', lufthansa.buyPlane); // on event handler 'this' keyword points to element(button)
buyButton.addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we use bind to define 'this'

// Partial application -- presetting parameters
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.17); // we set the this keyword to null, we preset the tax value to 17%
console.log(addVAT(100));

// const makeVATFunction = function (rate) {
//   const addTax = (rate, value) => value + value * rate;
//   return addTax.bind(null, rate);
// };
const makeVATFunction = function (rate) {
  return value => value + value * rate;
};

console.log(makeVATFunction(0.17)(200));

// First-Class and Higher-Order

// functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

/*
const greet = greeting => {
  return name => console.log(`${greeting} ${name}`);
};

const greeterHey = greet('Hey');

greeterHey('Mario');
greeterHey('Peter');
greet('Hello')('Mario');

/*
// callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function - because higher abstraction
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time - abstraction
const high5 = function () {
  console.log('👋');
};
// document.body.addEventListener('click', high5); // this is also a higher order function

['Mario', 'Martha', 'Adam'].forEach(high5); // for each a function is called

/*

// How passing arguments works : value vs reference
const flight = 'LH234';
const mario = {
  name: 'Mario Prskalo',
  passport: 24593921393,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name; // changes the original object (reference)
  if (passenger.passport === 24593921393) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, mario);
// console.log(flight);
// console.log(mario);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(mario);
checkIn(flight, mario);
console.log(mario);


/*
// default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // old way ES5
  // numPassengers = numPassengers || 1; // oldway
  // price = price || 199; // ES5 WAY

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 5);
*/
