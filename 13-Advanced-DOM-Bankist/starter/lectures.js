'use strict';

// !Selecting, Creating and Deleting Elements

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
message.innerHTML = `We use cookies for improved functionality and analytics <button class ="btn btn--close--cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true)) // to clone a node for having two of them

// header.before(message);
// header.after(message);

// !Delete elements

document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', () => message.remove()); // old way: message.parentElement.removeChild(message)

//! Styles, Attributes and Classes
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.height); // logs nothing because style is set and hidden inside of css
console.log(message.style.backgroundColor); // logs the color because we set it using javascript

// console.log(getComputedStyle(message); // getComputedStyles returns an object with all of the css styles
console.log(getComputedStyle(message).color); //
console.log(getComputedStyle(message).height); //

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
