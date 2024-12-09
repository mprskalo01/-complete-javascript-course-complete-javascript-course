'use strict';

// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this - Never create a method using a constructor function
  // this.calcAge = function () {
  //   return 2024 - this.birthYear;
  // };
};

const mario = new Person('Mario', 2001);
console.log(mario);

// 1. New {} - empty object is created
// 2. function is called, this = {} - this is set to the new empty object
// 3. {} object is linked to prototype
// 4. function automatically returns the object {...}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(mario instanceof Person); // true
