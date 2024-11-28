'use strict';

// working with strings part 1

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//

// console.log(flights.split('+'));

const getFlightCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴 ' : ''}${type
    .replaceAll('_', ' ')
    .trim()} from ${getFlightCode(from)} to ${getFlightCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(50);
  console.log(output);
}

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// My solution
const camelCaseConverter = function () {
  const namesTextarea = document.querySelector('textarea').value;
  let names = namesTextarea.split('\n');
  let i = 0;
  for (let name of names) {
    i++;
    const fixedNames = name.toLowerCase().trim();
    const nameArray = fixedNames.split('_');
    const camelNames =
      nameArray[0] +
      nameArray[1][0].replace(
        nameArray[1][0],
        nameArray[1][0].toUpperCase() + nameArray[1].slice(1)
      );
    console.log(`${camelNames.padEnd(20)} ${'✅'.repeat(i)}`);
  }
};

document.querySelector('button').addEventListener('click', camelCaseConverter);
*/

// const names = [
//   'underscore_case',
//   'first_name',
//   'Some_Variable',
//   '  calculate_AGE',
//   'delayed_departure',
// ];

// camelCaseConverter(names);

/* 
const airline = 'TAP Air Portugal';
// const plane = 'A320';

// SPLIT AND JOIN

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Mario Prskalo'.split(' ');

console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  name.toLowerCase();
  const names = name.split(' ');
  const namesUpper = [];
  for (let n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return namesUpper.join(' ');
};

console.log(capitalizeName('jessica ann smith davis'));

console.log(capitalizeName('mario prskalo'));

// padding a string

const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Mario'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // converts to string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(131232342));
console.log(maskCreditCard(12312444312442));
console.log(maskCreditCard('12314233212444312442'));

// Repeat

const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line: ${'✈'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

/*
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'maRiO'; // should be Mario

const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

const fixPassengerName = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  return passengerCorrect;
};

// Comparing email
const email = 'mario@gmail.com';
const loginEmail = '    maRiO@GmAIL.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // trims the whitespace
console.log(trimmedEmail);

const fixLoginEmail = function (email) {
  const fixedEmail = email.toLowerCase().trim();
  return fixedEmail;
};

// console.log(fixLoginEmail('    maRiO@GmAIL.com \n'));

// replacing

const priceEU = '288,97€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');
console.log(priceUS);

const annoucement =
  'All passengers come to boarding door 23. Boarding door 23!';

// console.log(annoucement.replace(/door/g, 'gate')); // before using regex
console.log(annoucement.replaceAll('door', 'gate')); // replaceAll new function

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`${plane} is part of the NEW Airbus family.`);
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You cannot board. Illegal items.');
  } else console.log('All good. Board on.');
};

checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/*

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // first word after space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // last word after space

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😖');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Mario')); // typeof Object

*/
