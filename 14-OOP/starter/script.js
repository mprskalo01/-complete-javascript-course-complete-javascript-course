'use strict';

// Constructor Functions and the new Operator
/*
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
// console.log(mario);

// 1. New {} - empty object is created
// 2. function is called, this = {} - this is set to the new empty object
// 3. {} object is linked to prototype
// 4. function automatically returns the object {...}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(mario instanceof Person); // true

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

mario.calcAge();

console.log(mario.__proto__);
console.log(mario.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(mario)); // true

Person.prototype.species = 'Homo Sapiens';

console.log(mario.species, matilda.species);

console.log(mario.hasOwnProperty('firstName')); // true
console.log(mario.hasOwnProperty('species')); // false because it is in prototype

// Prototypal Inheritance and The Prototype Chain

// Prototypal Inheritance on Built-In Objects

console.log(mario.__proto__);
console.log(mario.__proto__.__proto__);
console.log(mario.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 5, 7, 98, 4, 4, 3, 3, 2]; // new Array([3, 5, 7, 98, 4, 3, 2])
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // not good

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);
*/

///////////////////////////////////////
// #CHALLENGE #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
*/

// ES6 Classes

// class expression
// const PersonCl = class{}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // everything outside of constructor will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);

jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted -- cannot use them before they are declared
// 2. Classes are first-class citizens -- we can pass them into functions and return them from functions
// 3. Classes are executed in strict mode -- body of class is always executed in the strict mode
