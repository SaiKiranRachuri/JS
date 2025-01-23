'use strict';

const buttonNewGame = document.querySelector('.btn--new');
const buttonDiceRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

const scoreZeroElement = document.querySelector('#score--0');
const scoreOneElement = document.getElementById('score--1');

// const currentZeroElement = document.querySelector('#current--0');
// const currentOneElement = document.getElementById('current--1');

const playerZeroElement = document.querySelector('.player--0');
const playerOneElement = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

// Initials of game

// 1) Hide dice
const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

// 2) Set scores to zeros - defined x and y over html
scoreOneElement.textContent = 0;
scoreZeroElement.textContent = 0;

// Button dice roll

buttonDiceRoll.addEventListener('click', function () {
  if (playing) {
    // Generate dice and display respective dice image
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceValue}.png`;

    // Dice value is not 1 then add to active player's current score ele switch player
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Reset current score and switch active player

      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  }
});

// Button Hold

buttonHold.addEventListener('click', function () {
  // Add the score to score element of active player
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if score is >=100

    if (scores[activePlayer] >= 20) {
      // Finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      // Hide dice and remove buttons functionality
      diceElement.classList.add('hidden');
      playing = false;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      document.querySelector('.player--0').classList.toggle('player--active');
      document.querySelector('.player--1').classList.toggle('player--active');
    }
  }
});

buttonNewGame.addEventListener('click', function () {
  console.log('new game button');
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  diceElement.classList.add('hidden');

  scoreOneElement.textContent = 0;
  scoreZeroElement.textContent = 0;

  // Remove black background for the winner
  playerZeroElement.classList.remove('player--winner');
  playerOneElement.classList.remove('player--winner');

  playerZeroElement.classList.add('player--active');
  playerOneElement.classList.remove('player--active');
});
