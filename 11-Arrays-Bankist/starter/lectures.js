'use strict';
// const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accounts
// LECTURES

// Array grouping
/*
console.log(movements);

const groupedMovements = Object.groupBy(movements, mov =>
  mov > 0 ? 'deposits' : 'withdrawals'
);
const { deposits, withdrawals } = Object.groupBy(movements, mov =>
  mov > 0 ? 'deposits' : 'withdrawals'
);

console.log(groupedMovements); // {'deposits': [...], 'withdrawals': [...]}
console.log(deposits, withdrawals);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity);
*/

// Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

console.log(movements);

// const reversedMov = movements.reverse(); // destructive method, mutates the original array
// const reversedMov = movements.slice().reverse(); // workaround using slice()
// console.log(reversedMov);
// console.log(movements);

// NON DESTRUCTIVE METHODS
const reversedMov = movements.toReversed();
console.log(reversedMov);

// toSorted (sort), toSpliced (splice)

// movements[1] = 2000; // mutates the original array
const newMovements = movements.with(1, 2000); // changes the value at the first param which is the index
console.log(newMovements);

console.log(movements);

// More ways of creating and filling arrays
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9));
const x = new Array(9); // creates an array with 7 empty elements
console.log(x);

// fill method - fills the array with the value
// fill (value, beginning index, end index)
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

nums.fill(4, 4, 6);
console.log(nums);

// Array.from function
const genArray = Array.from({ length: 9 }, () => 1);
console.log(genArray);

const z = Array.from({ length: 9 }, (_, i) => i + 1);
console.log(z);

// making dom objects to array

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/

// SORTING ARRAYS - sort MUTATES THE ORIGINAL ARRAY
/*
// sorting works by converting to strings and then sorting
// String sorting
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
// Numbers sorting
// console.log(movements);
// movements.sort(); // sorts alphabetically
console.log(movements);

// return < 0 ; A, B (keep order)
// return > 0 ; B, A (switch order)
//ASCENDING ORDER
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });
movements.sort((a, b) => a - b); // BEST WAY FOR DESCENDING
console.log(movements);
// DESCENDING ORDER
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });
movements.sort((a, b) => b - a); // BEST WAY FOR DESCENDING
console.log(movements);
*/
// flat and flatMap methods
/*
// flat - method that 'flattens' nested arrays into a single array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// flat method has a depth condition that we can change
console.log(arrDeep.flat(2)); // depth of 2

const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov);

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance);

// flatMap is a method which combines flat and map methods for better performance because it is a common combination
// flatMap - IT ONLY GOES 1 LEVEL DEEP FOR NESTED ARRAYS
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(overallBalance2);
*/
// some and every methods
/*
// SOME - returns true if there is at least one element which satisfies the condition
console.log(movements.includes(-130)); // returns true if includes
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0); // returns true if there are any mov that satisfy condition
const anyLargeDeposits = movements.some(mov => mov > 5000); // returns true if there are any mov that satisfy condition
console.log(anyDeposits);
console.log(anyLargeDeposits);

// EVERY - - returns true if all elements satisfy the condition

console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
console.log(`-------SEPERATE CALLBACK-------`);
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// FIND METHOD -- returns the first element that satisfies this condition
/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);
console.log(movements.find(mov => mov === 450));
console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// findIndex method -- returns the index of the first found element

const firstWithdrawalIndex = movements.findIndex(mov => mov < 0);
console.log(firstWithdrawalIndex);

// The New findLast and find LastIndex Methods
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);
const lastWithdrawalIndex = movements.findLastIndex(mov => mov < 0);
console.log(lastWithdrawalIndex);

// 'Your Latest large movement was X movements ago'
const largestMovement = movements.reduce(function (acc, value) {
  if (acc > value) return acc;
  else return value;
});

const largestMovementIndex = movements.findIndex(
  mov => mov === largestMovement
);
console.log(
  `Your largest movement of ${largestMovement} was ${largestMovementIndex} movements ago`
);
*/

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
