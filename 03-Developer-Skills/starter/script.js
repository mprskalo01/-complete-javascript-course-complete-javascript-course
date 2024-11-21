// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// TODO SUM GRADE CALCULATIONS

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitude = function (temperatures) {

//   let min = temperatures[0];
//   let max = temperatures[0];
//   let amplitude = 0;
//   for (let i = 0; i < temperatures.length; i++) {
//     if (typeof temperatures[i] !== 'number') continue;
//     if (temperatures[i] < min) {
//       min = temperatures[i];
//     } else if (temperatures[i] > max) {
//       max = temperatures[i];
//     }
//   }
//   if (min < 0) {
//     amplitude = max - min;
//   } else {
//     amplitude = max + min;
//   }

//   return console.log(
//     `The lowest temperature is: ${min}; The highest temperature is: ${max}; The temperature amplitude is: ${amplitude}`
//   );
// };

// calcAmplitude(temperatures);

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [20, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmplitudeMerged = function (temps1, temps2) {
//   const mergedTemps = temps1.concat(temps2);

//   let min = mergedTemps[0];
//   let max = mergedTemps[0];
//   let amplitude = 0;
//   for (let i = 0; i < mergedTemps.length; i++) {
//     if (typeof mergedTemps[i] !== 'number') continue;
//     if (mergedTemps[i] < min) {
//       min = mergedTemps[i];
//     } else if (mergedTemps[i] > max) {
//       max = mergedTemps[i];
//     }
//   }
//   if (min < 0) {
//     amplitude = max - min;
//   } else {
//     amplitude = max + min;
//   }

//   return console.log(
//     `The lowest temperature is: ${min}; The highest temperature is: ${max}; The temperature amplitude is: ${amplitude}`
//   );
// };

// calcAmplitudeMerged(temperatures1, temperatures2);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   // const kelvin = measurement.value + 273;
//   // Have to convert to number, did it in the object
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// for (let i = 0; i < arr.length; i++) {
//   console.log(
//     `... ${arr[i]} in ${(i += 1)} days... ... ${
//       arr[(i += 1)]
//     } in ${(i += 1)} days... ... ${arr[(i += 1)]} in ${(i += 1)} days...`
//   );
// }

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(str);
};

printForecast(arr1);
printForecast(arr2);
