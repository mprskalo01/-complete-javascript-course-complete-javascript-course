/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Mario";
let age = "23";

console.log(`My name is ${firstName} and I am ${age} years old`);
let myFirstJob = "Web Developer";

console.log(myFirstJob);


); */

/* let javascriptIsFun = true;

console.log(javascriptIsFun);

console.log(typeof 23);

console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(typeof year);

console.log(typeof null);

let country = "Croatia";
let continent = "Europe";
let population = 3200000;
let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);*/

/* let age = 30;
age = 31;

// const birthYear = 2001;

let lastName = "Prskalo";

console.log(lastName);

let country = "Croatia";
const continent = "Europe";
let population = 3200000;
const isIsland = false;
const language = "Croatian"; */

/* //Math Operators
let currentYear = 2077;

let ageMario = currentYear - 2001;
let ageSara = currentYear - 2028;
console.log(ageMario, ageSara);

console.log(ageMario * 2, ageMario / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 which is = 2*2*2

const firstName = "Mario";
const lastName = "Prskalo";

console.log(firstName + " " + lastName);

// Comparison operators
console.log(ageMario < ageSara); // >, <, >=, <=

console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
console.log(currentYear - 2001 > currentYear - 2028);

// Assigment operators
let x = 10 + 5; //15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x); 

*/
/*
let currentYear = 2077;

let ageMario = currentYear - 2001;
let ageSara = currentYear - 2028;

console.log(ageMario > ageSara);
console.log(currentYear - 2001 > currentYear - 2028);

const averageAge = (ageMario + ageSara) / 2;
console.log(ageMario, ageSara, averageAge);

// Assignment
let country = "Croatia";
const continent = "Europe";
let population = 3200000;
const isIsland = false;
const language = "Croatian";

let halfPopulation = population / 2;
console.log((population += 1));
let finlandPopulation = 6000000;
let isGreaterPopulation = population > finlandPopulation;
let averagePopulation = 33000000;
let isLessThanAveragePopulation = population < averagePopulation;

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description); 
*/

/* 
// Challenge #1 (Maybe change the let's to const's)
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.88;

const BMIMark = massMark / (heightMark * heightMark)

const BMIJohn = massJohn / (heightJohn * heightJohn)

let markHigherBMI = BMIMark > BMIJohn 

console.log(BMIMark, BMIJohn, markHigherBMI)
*/

/*
const firstName = "Mario";
const job = "web developer";
const birthYear = 2001;
const currentYear = 2024;
const mario = `I'm ${firstName}, and I'm a ${
  currentYear - birthYear
} year old ${job} `;

console.log(mario);
console.log(`Just a regular string...`);

console.log("String with \n multiple \n lines");

console.log(`String
multiple 
lines`); */

/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving school 🚗 ");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

let century;
const birthYear = 2001;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Assignment
let country = "Croatia";
const continent = "Europe";
let population = 3;
const isIsland = false;
const language = "Croatian";

let halfPopulation = population / 2;
let finlandPopulation = 6;
let isGreaterPopulation = population > finlandPopulation;
let averagePopulation = 33;
let isLessThanAveragePopulation = population < averagePopulation;

if (population < averagePopulation) {
  console.log(
    `${country} has a population that is ${
      averagePopulation - population
    } million below average`
  );
} else {
  console.log(
    `${country} has a population that is ${
      population - averagePopulation
    } million above average`
  );
} */

// Challenge #2

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);


 Write your code below. Good luck! 🙂 

if(BMIMark > BMIJohn){
  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
}else
  {console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)} */

/* 
// type conversion
const inputYear = "2001";

console.log(inputYear, Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23));

// type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old"); //JavaScript has included type coercion, the + sign turns to String

console.log("23" - "10" - 3); // the - sign turns to Number
console.log("23" * "2"); // and so do the * and / signs turn to Number
console.log("22" / 2);

let n = "1" + 1;
n = n - 1;
console.log(n);

//assigment
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// 5 falsly values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Mario"));
console.log(Boolean({}));

const money = 20;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED!");
}


*/

/*
const age = 18;

if (age == 18) console.log("You just became an adult! (loose)");
if (age === 18) console.log("You just became an adult! (strict)");

const favNumber = Number(prompt("What's your favourite number ? "));
console.log(favNumber);
console.log(typeof favNumber);

if (favNumber === 23) {
  console.log("Cool. 23 is an amazing number");
} else if (favNumber === 7) {
  console.log("7 is also a cool number.");
} else if (favNumber === 9) {
  console.log("9 is also a cool number.");
} else {
  console.log("Number is not cool");
}

if (favNumber !== 23) {
  console.log("Why not 23 ?");
} 
  
//assigment
const numNeighbours = prompt(
  'How many neighbour countries does your country have?'
);

// LATER : This helps us prevent bugs
const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Smeone else should drive...");
// }

const isTired = true; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Smeone else should drive...");
}

assigment
if (language === 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

 // From now on i shall do all the assigments at the end of each chapter
 
 //challenge
 
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log("Dolphins win the trophy")
} else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    console.log("Koalas win the trophy")
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
    console.log("Both win the trophy")
}
 

const scoreDolphins = (100 + 100 + 100) / 3;
const scoreKoalas = (100 + 100 + 10) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("Both teams have less than 100 points. No one wins");
}

 */

// const day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("Plan study structure");
//     console.log("Go to coding meetup");
//     break; // break is necessary on each case for stopping the switch statement
//   case "tuesday":
//     console.log("Prepeare for interviews");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Study hard");
//     break;
//   case "friday":
//     console.log("Send applications");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a weekday");
// }

// if (day === "monday") {
//   console.log("Plan study structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepeare for interviews");
// } else if (day === "wednesday" || "thursday") {
//   console.log("Study hard");
// } else if (day === "Friday") {
//   console.log("Send applications");
// } else if (day === "saturday" || "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a weekday");
// }

/*
// expressions
3 + 4;
1991;
true && false && !false;

// statements

if (23 > 10) {
  const str = "23 is bigger"; // this is also an expression inside the if statement
} */
/*
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink juice");

const drink = age >= 18 ? "wine" : "juice";

console.log(drink);

// if else
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "juice";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "juice"}`); */

/*
// challenge #4
const bill = 275;

// Write your code below. Good luck! 🙂 

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
); */
