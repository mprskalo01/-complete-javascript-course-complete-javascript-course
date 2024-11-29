'use strict';

// First-Class and Higher-Order

// functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

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
