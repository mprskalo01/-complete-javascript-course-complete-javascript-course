'use strict';

// Selecting elements
// const score2 = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, playing, activePlayer, currentScore;

const init = () => {
  scores = [0, 0];
  playing = true;
  currentScore = 0;
  activePlayer = 0;

  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  score0El.textContent = 0;
  score1El.textContent = 0;

  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};

init();

const switchPlayer = () => {
  // set current score to 0
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  // switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); // toggles the class
  player1El.classList.toggle('player--active'); // toggles the class
};

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generate a random dice roll (1-6)
    const dice = Math.trunc(Math.random() * 6 + 1);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled
    if (dice !== 1) {
      currentScore += dice;
      // add to current score
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;

      // if (activePlayer === 0) {
      //   current0El.textContent = currentScore; // CHANGE LATER
      // } else {
      //   current1El.textContent = currentScore; // CHANGE LATER
      // }
    } else {
      switchPlayer();
      // if (activePlayer === 0) {
      //   activePlayer = 1;
      //   current0El.textContent = currentScore;
      // } else {
      //   activePlayer = 0;
      //   current1El.textContent = currentScore;
      // }
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. add the score to scores array
    scores[activePlayer] += currentScore;
    // display the player score
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// btnNew.addEventListener('click', () => {
//   location.reload();
// });
btnNew.addEventListener('click', init);
