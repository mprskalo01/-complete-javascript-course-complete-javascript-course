'use strict';
////////////////////////////////////////////
// LECTURES

// Timers: setTimeout and setInterval
/*
// setTimeout - only runs once
const MINUTE = 600000;
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} & ${ing2} 🍕`),
  3000,
  ...ingredients // function arguments are passed after the timer
); // only the callback function waits 3 seconds
console.log(`Waiting...`); // this appears immediately

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer); // if true, clears the timeout, function does not run

// setInterval - runs in intervals
setInterval(() => {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, '0');
  const minutes = `${now.getMinutes()}`.padStart(2, '0');
  const seconds = `${now.getSeconds()}`.padStart(2, '0');
  console.log(`${hour}:${minutes}:${seconds}`);
}, 1000);
*/
// !Internationalizing Dates & Numbers (for eg. date format and currency and number format)
// const locale = navigator.language;
// const date = new Date();
// console.log(Intl.DateTimeFormat(locale).format(date));
/*
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

const num = 3884764.23;
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
console.log('DE:', new Intl.NumberFormat('de-DE', options).format(num));
console.log('SY:', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
console.log('US:', new Intl.NumberFormat('en-US', options).format(num));
*/
// Operations with Dates
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // number timestamp in miliseconds 2142253380000

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); // 10 - as in 10 days passed
// better to use date libraries
*/

// Dates and Time
/*
// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Wed Dec 04 2024 14:25:06'));
console.log(new Date('December 24, 2024')); // unreliable if inputing custom

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31)); // self correction
console.log(new Date(2037, 10, 33)); // self correction

console.log(new Date(0)); // 1970

console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 -  zero based
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 - day of the week
console.log(future.getHours()); // 15 hours
console.log(future.getMinutes()); // 23 minutes
console.log(future.getSeconds()); // 0 seconds

console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z
console.log(future.getTime()); // 2142253380000
console.log(new Date(2142253380000)); // based on miliseconds, same as future date

console.log(Date.now()); // 1733319255217 current date & time in miliseconds
future.setFullYear(2040); // sets the year to 2040
console.log(future);
*/
// BigInt
/*
console.log(2 ** 53 - 1); // max safe integer
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); // unsafe numbers

// the n transforms a number to bigInt number
console.log(23123125412589128309821380912839012830981290381092839293n);
console.log(BigInt(23123125412589125));

// Operations
console.log(10000n + 10000n); // 20000n
console.log(3333333123124121231243213123n * 3213334n);

// console.log(Math.sqrt(16n)); // does not work on bigint

const huge = 231321354231959232352352n;
const num = 23;
// console.log(huge + num); // cannot mix bigInt and other types
console.log(huge + BigInt(num));

// Exceptions
console.log(20n > 15); // true, works in comparisons
console.log(20n === 20); // false, not the same type
console.log(typeof 20n); // bigint
console.log(20n == 20); // true because loose equality operator

console.log(huge + ' is really big'); // bigint gets converted to string

// Divisions

console.log(10 / 3); // 3.3333333333333335
console.log(10n / 3n); // 3n
*/
// Numeric Separators
/*
// 287,460,000,000
const diameter = 287460000000;
const diameterSeparated = 287_460_000_000;
console.log(diameter === diameterSeparated); // true
const price = 345_99;

console.log(price); // 34599

const transferFee1 = 15_00;
const transferFee2 = 1500;

// there are rules where to place numeric separators
const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // NaN - Only use numeric separators in numbers, not strings
console.log(Number.parseInt('230_000')); // We only get 230 with parseInt not the remainding digits
*/
// Remainder Operator
/*
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(10 % 5); // 0

console.log(6 % 2); // 0
console.log(7 % 2); // 1

const isEven = n => (n % 2 === 0 ? true : false);
// maybe only check the last digit remainder for performance ?? idk
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(5212118));
*/
// Math and Rounding
/*
console.log(Math.sqrt(25)); // square root
console.log(25 ** (1 / 2)); // square root
console.log(8 ** (1 / 3)); // cubic root (or larger)

console.log(Math.max(5, 18, 13, 23, 11, 2)); // 23
console.log(Math.max(5, 18, 13, '23', 11, 2)); // 23
console.log(Math.max(5, 18, 13, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 13, 23, 11, 2)); // 2

console.log(Math.PI); // 3.14159...
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max-min)-> min...(max-min+min) -> min...max
console.log(randomInt(5, 25)); // random number between 5 and 25

// Rounding integers
console.log(Math.trunc(23.9)); // 23
console.log(Math.trunc(23.1)); // 23

console.log(Math.round(23.9)); //  24
console.log(Math.round(23.1)); //  23

console.log(Math.ceil(23.1)); // 24
console.log(Math.ceil(23.9)); //  24

console.log(Math.floor(23.1)); // 23
console.log(Math.floor('23.9')); //  23

// Negative numbers - difference between floor and trunc
console.log(Math.trunc(-23.3)); // 23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals
// toFixed always returns a string
console.log((2.7).toFixed(0)); // 2
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35 but a number
*/
// Converting and Checking Numbers
/*
console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004 // 1/10 = 0.1 + 3/10 = 0.333333333333
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number(23));
console.log(+'23'); // converts to number - easier way

// Parsing
console.log(Number.parseInt('30px'), 10); // figures out the number and returns it (30)
console.log(Number.parseInt('e23', 10)); // NaN because symbols before number

console.log(Number.parseInt('2.5rem')); // 2

// best way to read a number from a string , Number.parseFloat
console.log(Number.parseFloat('2.5rem')); // 2.5


// check if value is Not a Number (NaN)
console.log(Number.isNaN(23)); // is it not a number ? false because it is a number
console.log(Number.isNaN('23')); // false it is some value
console.log(Number.isNaN(+'20px')); // true, it is not a number
console.log(Number.isNaN(23 / 0)); // false, considers it a nummber

// best way to check if something is a number
console.log(Number.isFinite(20)); // true, it is a number
console.log(Number.isFinite('20')); // false, it is not a number
console.log(Number.isFinite(+'20x')); // false, it is not a number
console.log(Number.isFinite(23 / 0)); // false, it is not a number
*/
