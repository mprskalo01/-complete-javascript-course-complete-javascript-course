'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// for the input field we use .value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(highscore);
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When invalid input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔Invalid input!⛔';
    // When player guesses right
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number!🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = `${score}`;
    }

    // When guess is too high
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game💥';
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game💥';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
});

*/

/// DRY PRINCIPLES
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// functions to change an elements(el) textContent(cont)
const changeTextContent = function (el, cont) {
  document.querySelector(el).textContent = cont;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When invalid input
  if (!guess) {
    changeTextContent('.message', '⛔Invalid input!⛔');
    // When player guesses right
  } else if (guess === secretNumber) {
    changeTextContent('.message', '🎉Correct Number!🎉');
    changeTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      changeTextContent('.highscore', score);
    }
    // When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      changeTextContent(
        '.message',
        guess > secretNumber ? 'Too high!📈' : 'Too low!📉'
      );
      score--;
      changeTextContent('.score', score);
    } else {
      changeTextContent('.message', 'You lost the game💥');
      changeTextContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  changeTextContent('.score', score);
  changeTextContent('.message', 'Start guessing...');
  changeTextContent('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
});
