'use strict';
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

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

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

// ARRAYS

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(years[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Mario";
// const mario = [firstName, "Prskalo", 2024 - 2001, friends];

// console.log(mario);

// const calcAge = (birthYear) => 2024 - birthYear;

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);

// // ADD ELEMENTS
// friends.push("Jay"); // add to end
// console.log(friends);

// friends.unshift("John"); // add to beginning
// console.log(friends);

// // REMOVE ELEMENTS

// const popped = friends.pop(); // removes the last element
// console.log(popped);
// console.log(friends);

// friends.shift(); // removes the first element
// console.log(friends);

// console.log(friends.indexOf("Steven")); // find the location of the element
// console.log(friends.indexOf("Rumbador"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Rumbador"));

// if (friends.includes("Peter")) {
//   console.log("You have a friend named Peter");
// }

// CHALLENGE #2

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// OBJECTS

// const marioArray = [
//   "Mario",
//   "Prskalo",
//   2024 - 2001,
//   "Web Developer",
//   ["Micheal", "Peter", "Steven"],
// ];

// const mario = {
//   firstName: "Mario",
//   lastName: "Prskalo",
//   age: 2024 - 2001,
//   job: "Web Developer",
//   friends: ["Peter", "Micheal", "Steven"],
// };

// console.log(mario.firstName);
// console.log(mario["lastName"]);

// const nameKey = "Name";

// console.log(mario["first" + nameKey]); // expressions only possible in brackets
// console.log(mario["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Mario? Choose between firstName, lastName, age, job and friends :"
// );

// console.log(interestedIn);

// if (mario[interestedIn]) {
//   console.log(mario[interestedIn]);
// } else {
//   console.log("No information for that input");
// }

// mario.location = "Croatia";
// mario["website"] = "marioprskalo.dev";

// console.log(mario);

// // Challange
// // "Mario has 3 friends and his best friend is called Micheal"

// console.log(
//   `${mario.firstName} has ${mario.friends.length} friends, and his best friend is called ${mario.friends[0]}`
// );

// OBJECT METHODS

// const mario = {
//   firstName: "Mario",
//   lastName: "Prskalo",
//   birthYear: 2001,
//   job: "Web Developer",
//   friends: ["Peter", "Micheal", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2024 - this.birthYear; // THIS IS VERY IMPORTANT
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${this.job}, and he ${
//       this.hasDriversLicense
//         ? "does have a driver's license."
//         : "doesn't have a driver's license"
//     }`;
//   },
// };

// // console.log(mario.calcAge(2001));
// // console.log(mario["calcAge"](2001));

// mario.calcAge();
// console.log(mario.age);

// // Challenge
// // "Mario is a 23-year old web developer, and he does have a drivers license"
// console.log(mario.getSummary());

// CHALLENGE #3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// // console.log(
// //   `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
// // );

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

// THE FOR LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition: ${rep} 🏋️‍♂️`);
// }

// const mario = [
//   "Mario",
//   "Prskalo",
//   2024 - 2001,
//   "Web Developer",
//   ["Micheal", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < mario.length; i++) {
//   // reading from mario array
//   // console.log(mario[i], typeof mario[i]);

//   // filling types array
//   // types[i] = typeof mario[i];
//   types.push(typeof mario[i]);
// }
// console.log(types);

// const years = [1991, 1995, 1999, 2001];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < mario.length; i++) {
//   if (typeof mario[i] !== "string") continue; // SKIPS
//   console.log(mario[i], typeof mario[i]);
// }
// console.log("---BREAK ON NUMBER ---");
// for (let i = 0; i < mario.length; i++) {
//   if (typeof mario[i] === "number") break; // ABORTS
//   console.log(mario[i], typeof mario[i]);
// }

// const mario = [
//   "Mario",
//   "Prskalo",
//   2024 - 2001,
//   "Web Developer",
//   ["Micheal", "Peter", "Steven"],
// ];

// // backward loop
// for (let i = mario.length - 1; i > -1; i--) {
//   console.log(mario[i]);
// }

// // loop inside of a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`----- Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition: ${rep} 🏋️‍♂️`);
// }

// while loop
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition: ${rep} 🏋️‍♂️`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You've rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("You rolled a 6. Loop is about to end");
//   }
// }

// CHALLENGE #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 'okay'];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// bonus task #2

// const fakeArr = ["lmao", 50, 100];

// const calcAverage = function (arr) {
//   let sum = 0;
//   let sumLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       sum += arr[i];
//       sumLength++;
//     }
//   }
//   if (sum / sumLength) {
//     return sum / sumLength;
//   } else {
//     return "No numbers detected";
//   }
// };

// console.log(calcAverage(fakeArr));
