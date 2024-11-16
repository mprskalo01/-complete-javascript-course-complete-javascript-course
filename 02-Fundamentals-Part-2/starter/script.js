"use strict";
// strict mode makes avoding bugs easier
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;

// FUNCTIONS

// function logger() {
//   console.log("My name is Jonas");
// }

// // calling | running | invoking a function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// const appleAndOrangeJuice = fruitProcessor(2, 2);

// console.log(appleJuice);
// console.log(appleAndOrangeJuice);

// // FUNCTION DECLARATION
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// const age1 = calcAge1(2001);

// // FUNCTION EXPRESSION -- BETTER
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(2001);
// console.log(age1, age2);

// ARROW FUNCTIONS

// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(2001);
// console.log(age2);

// // arrow function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(2001);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(2001, "Mario"));
// console.log(yearsUntilRetirement(1995, "Bob"));

// functions inside functions

// const cutFruitPieces = function (fruit) {
//   return fruit * 3;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = (birthYear) => 2024 - birthYear;

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const retirement = 65 - calcAge(birthYear);
//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years`;
//   } else {
//     return `${firstName} should already be retired`;
//   }
// };
// console.log(yearsUntilRetirement(2001, "Mario"));
// console.log(yearsUntilRetirement(1945, "Bob"));

// CHALLENGE #1 FUNCTION

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No team wins...`);
//   }
// };

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


