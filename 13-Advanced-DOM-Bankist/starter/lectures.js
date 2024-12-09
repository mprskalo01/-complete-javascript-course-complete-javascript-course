'use strict';

// !Selecting, Creating and Deleting Elements
/*
// console.log(document.documentElement); // html element
// console.log(document.head); // head element
// console.log(document.body); // body element

// Selecting elements

const header = document.querySelector('.header'); // element with class .header
const allSections = document.querySelectorAll('.section'); // nodeList of all matching elements [array Like]
// console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // this is an HTMLCollection -- updates itself on CRUD
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); // also an HTMLCollection

//! Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `We use cookies for improved functionality and analytics`;
message.innerHTML = `We use cookies for improved functionality and analytics <button class ="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true)) // to clone a node for having two of them

// header.before(message);
// header.after(message);

// !Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove()); // old way: message.parentElement.removeChild(message)
*/
/*
//! Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
// message.style.width = '120%';
console.log(message.style.height); // logs nothing because style is set and hidden inside of css
console.log(message.style.backgroundColor); // logs the color because we set it using javascript

// console.log(getComputedStyle(message); // getComputedStyles returns an object with all of the css styles
console.log(getComputedStyle(message).color); //
console.log(getComputedStyle(message).height); //

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// changing document (root) css variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes - eg. src, href, alt
const logo = document.querySelector('.nav__logo');
// logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// non standard
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));
// console.log(logo.company);

// FOR THE RELATIVE SRC FILE PATH
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // http://127.0.0.1:8080/#
console.log(link.getAttribute('href')); // #
*/

// !Data attributes
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// Dont use logo.className = 'mario' // overwrites all of classes

// Types of events and Event Handlers
/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Hovering heading');

  // h1.removeEventListener('mouseenter', alertH1); // Removing event listeners
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // Removing event listeners after 3 seconds

// inline html element attribut eg. onlick="alert('HTML inline alert')"

// h1.onmouseenter = function (e) { // old way
//   alert('onmouseenter: Hovering heading');
// };
*/
// !Event Propagation: Bubbling and Capturing - Propagation
/*
// rgb (255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK ${(e.target, e.currentTarget)}`);
  console.log(e.currentTarget === this); // true

  // Stop propagation - the event doesnt trigger parent element events
  // e.stopPropagation() // in general, not a good idea
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINKS ${(e.target, e.currentTarget)}`);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAVBAR ${(e.target, e.currentTarget)}`);
});
*/

// Event Delegation

// DOM Traversing
/*
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = `var(--gradient-secondary)`;
h1.closest('h1').style.background = `var(--gradient-primary)`;

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // trick for all siblings
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.8)';
});
*/

// Passing arguments to event handlers

// The Intersection Observer API
/*
// Define the callback function for the IntersectionObserver
// This function will be called whenever the observed elements intersect with the root
const obsCallback = function (entries, observer) {
  // Loop through each entry (intersection event)
  entries.forEach(entry => {
    // Log the entry to the console
    console.log(entry);
  });
};

// Define the options for the IntersectionObserver
const obsOptions = {
  // The root element to use for intersection checking (null means the viewport)
  root: null,
  // The thresholds at which the callback should be invoked (0 and 20% visibility)
  threshold: [0, 0.2],
};

// Create a new IntersectionObserver with the callback and options
const observer = new IntersectionObserver(obsCallback, obsOptions);

// Start observing the target element (section1)
observer.observe(section1);
*/

// Lifecycle DOM Events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   // e.returnValue = ''; Deprecated
// });

// Efficient Script Loading: defer and async
// defer is best
/*
 * The difference between `defer` and `async` in the script tag:
 *
 * 1. `defer`:
 *    - Scripts with `defer` are executed in the order they appear in the document.
 *    - The script is downloaded in parallel to parsing the page, but execution is deferred until the HTML parsing is finished.
 *    - It ensures that the DOM is fully built before the script runs.
 *    - Suitable for scripts that rely on the DOM being fully constructed.
 *
 * 2. `async`:
 *    - Scripts with `async` are executed as soon as they are downloaded, without waiting for the HTML parsing to complete.
 *    - The script is downloaded in parallel to parsing the page, but execution happens immediately after the script is downloaded.
 *    - The order of execution is not guaranteed, which can lead to issues if scripts depend on each other.
 *    - Suitable for independent scripts that do not rely on the DOM or other scripts.
 */
