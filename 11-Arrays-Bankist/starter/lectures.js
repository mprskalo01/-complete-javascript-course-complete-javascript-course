'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// LECTURES

// FIND METHOD



/*
// CHAINING METHODS - chaining methods to methods that returns an array
const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   console.log(arr); // good for debugging new arrays in chain
  //   return mov * eurToUsd;
  // })
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
/*
// map, filter, reduce - data transformation methods
// map method same as for each, only it puts mutated values into an array
/*
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd; // pushes the return element to new array
// });

const movementsUSD = movements.map(
  mov => mov * eurToUsd // pushes the return element to new array
);

console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);
*/

// filter methods, returns new array for which the condition is true (current > 2)
/*

const deposits = movements.filter(function (mov) {
  // params have acces to (mov, i, arr)
  return mov > 0; // returns elements which are greater than 0 to deposits
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
// reduce methods, reduces all the array elements into one single value
/*
// acc is the accumulator which accumulates the values of the array -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);

//   return acc + cur;
// }, 0); // 0(zero) is the starting value of the accumulator
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// get maximum value using reduce
// const maxMovement = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// simplified max value
const maxMovement = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxMovement);
*/
// FOR EACH METHOD - Loop through an array using a function for each element
/*
// movements.forEach(movement => console.log(movement));
// the first is the element, second is the index of the element, third is the whole array
// in the real world use the shorter abbreviations for params (mov, i , arr)

// movements.forEach((movement, index, array) => {
//   movement > 0
//     ? console.log(`Movement ${index + 1}: You deposited $${movement}`)
//     : console.log(`Movement ${index + 1}: You withdrew $${Math.abs(movement)}`);
// });

// FOR EACH ON MAPS AND SETS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// the underscore '_' before a variable it means it is a throwaway variable
currenciesUnique.forEach((value, _value, map) => {
  console.log(`${value}: ${value}`);
});

*/
/////////////////////////////////////////////////
/*

let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE - just returns the items without mutating the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);


// SPLICE - removes the items from the original array and returns them
arr.splice(-1); // removes the last element from the array
arr.splice(1, 2); // first element states from where, second to where items are deleted
console.log(arr);

// REVERSE - mutates the original array - reverses it
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - concatinates to arrays - merges them - does not mutate

const letters = arr.concat(arr2); // elements of arr and arr2 in the letters array
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN -
console.log(letters.join(' - ')); // elements are joined with the ' - ' in a string

// 'At' Method

const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // good for getting the last element 
console.log('mario'.at(-1));
*/
