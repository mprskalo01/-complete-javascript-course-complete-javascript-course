'use strict';

// SCOPE
/*
const calcAge = function (birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1991 && birthYear <= 1996) {
      // var millenial = true;  function, not block scope
      const firstName = 'Steven'; // It looks up the match in closest scope
      const str = `Oh, and you're a millenial. ${firstName}`;
      console.log(str);

      // output = 'NEW OUTPUT';

      const add = function (a, b) {
        return a + b;
      };
    }
    // console.log(str);
    // console.log(millenial); available using var
    // console.log(add(2, 3)); // functions are block scoped in strict mode
    console.log(output);
  }
  printAge();
  return age;
};

const firstName = 'Mario';
calcAge(2001);
calcAge(1995);
// console.log(age);
// printAge();
*/

// HOISTING

// VARIABLES
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Mario'; // hoisted to undefined
let job = 'teacher'; // in temporal dead zone - refError
const year = 2001; // in temporal dead zone - refError 
*/

// Functions
/*
console.log(addDecl(2, 5)); // logs the result (7)
// console.log(addExpr(2,5)); // undefined - it is in TDZ because of const
// console.log(addArrow(2, 5)); // undefined - it is in TDZ because of const

function addDecl(a, b) {
  return a + b;
}

// if we use var for functions, it is marked as undefined in TDZ

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// example
console.log(numProducts); // undefined
// console.log(cartItems); // refError

if (!numProducts) deleteShoppingCart();

var numProducts = 10; // it is undefined because var hoisted to top
// const cartItems = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1; // var creates x on window object
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

// THIS KEYWORD -- created for every execution context -- points to the "owner" of the function
/*
// console.log(this); // global object Window

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  // console.log(this); // undefined because in strict mode
};

calcAge(2001);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  // console.log(this); // In arrow functions it is Window because it inherits this from parent scope -- lexical this
};

calcAgeArrow(2001);

const mario = {
  birthYear: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.birthYear);
  },
};

mario.calcAge(); // methods logs the object that calls the object (mario)

const matilda = {
  birthYear: 2017,
};
matilda.calcAge = mario.calcAge; // method borrowing

matilda.calcAge();

// const f = jonas.calcAge; // no "owner", this is undefined - refError
// f();
*/

// REGULAR FUNCTIONS VS ARROW FNCTIONS

// var firstName = 'Matilda'; var creates on window object
// never use arrow functions for methods
/*
const mario = {
  firstName: 'Mario',
  birthYear: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.birthYear);
    // Solution 1
    //   const self = this; // so the this is available in child functions // self or that // old
    //   const isMillenial = function () {
    //     console.log(this);

    //     console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    //   };
    //   isMillenial();

    // Solution 2 because arrow functions inherits this from parent scope
    const isMillenial = () => {
      console.log(this);

      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    // console.log(this); // window object
    console.log(`Hey ${this.firstName}`); // it will be undefined because arrow function
  },
};

// mario.greet();
// mario.calcAge();

// arguments keyword -- arguments is an array of functions params

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 10, 15);

const addArrow = (a, b) => {
  // arrow functions doesnt contain arguments keyword
  console.log(arguments);

  return a + b;
};
addArrow(2, 5, 6); */

// PRIMITIVES vs OBJECTS -- primivite values & reference values for memeory - primitives in variable scope, reference in memory heap

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Mario',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me:', me);
*/
/*
let lastName = 'Prskalo';
let oldLastName = lastName;
lastName = 'Corleone';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// object is a reference value, it just copies the memory reference value instead of the whole object
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// in both the variables because they poin to the same object adress, the object is changed for all
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica = {}; // not possible because const is getting the memory address reference changed

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob', 'Ray'],
};

const jessicaCopy = Object.assign({}, jessica2); // merges two objects and that creates a new object
jessicaCopy.lastName = 'Davis'; // because it is a new object from merge with new address, value gets changed only in this object
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
// Object.assign only creates a shallow copy, instead of a deep copy
// that is why when editing an array (object with reference value) gets changed in both of the objects family arrays
jessicaCopy.family.push('Mary', 'Joseph');
*/
