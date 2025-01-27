'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const updateWidthOfNumber = function (width) {
  document.querySelector('.number').style.width = width;
};

const updateBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⚠️ Not a Number');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('📈 Number too high!')
        : displayMessage('📉 Number too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('😞 You lost the Game! Retry.');
    }
  } else {
    displayMessage('🎉 Correct Number!');
    score--;
    displayScore(score);
    updateBackgroundColor('#60b347');
    updateWidthOfNumber('30rem');
    document.querySelector('.number').textContent = guess;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  updateBackgroundColor('#222');
  updateWidthOfNumber('15rem');
  displayMessage('Start Guessing..');
  secretNumber = Math.trunc(Math.random() * 25) + 1;
});
