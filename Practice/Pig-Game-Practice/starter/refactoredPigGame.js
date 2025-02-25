'use strict';

// Button Selectors
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNew = document.querySelector('.btn--new');

// Current score element selectors
const currentScorePlayerZero = document.getElementById('current--0');
const currentScorePlayerOne = document.getElementById('current--1');

// Score element selectors
const scorePlayerZero = document.getElementById('score--0');
const scorePlayerOne = document.getElementById('score--1');

// Dice element selector
const dice = document.querySelector('.dice');

// Player selectors
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');

let diceValue, currentScore, activePlayer, playing, scores;

// Game initials
const gameInitials = function () {
  scorePlayerZero.textContent = 0;
  scorePlayerOne.textContent = 0;

  currentScorePlayerZero.textContent = 0;
  currentScorePlayerOne.textContent = 0;

  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');

  playerZero.classList.add('player--active');
  playerOne.classList.remove('player--active');

  dice.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
};

gameInitials();

// Switch Player
const switchPlayer = function () {
  activePlayer = activePlayer === 1 ? 0 : 1;
  currentScore = 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

// Button roll dice
buttonRoll.addEventListener('click', function () {
  if (playing) {
    // Generate dice value and display its respective image
    diceValue = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceValue}.png`;
    dice.classList.remove('hidden');

    if (diceValue !== 1) {
      // Add dice value to current score of active player and display
      currentScore += diceValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch active player
      switchPlayer();
    }
  }
});

// Button Hold
buttonHold.addEventListener('click', function () {
  if (playing) {
    // On hold click add current score to score
    scores[activePlayer] = currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if score >=20; Active player wins else switch player
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

// Button New Game
buttonNew.addEventListener('click', gameInitials);
