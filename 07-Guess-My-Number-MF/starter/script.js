'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'New text check...';

// document.querySelector('.highscore').textContent = 9999;

// document.querySelector('.score').textContent = 9999;

let secretNumber = Math.trunc(Math.random() * 25) + 1;
// console.log(typeof secretNumber);
// document.querySelector('.number').textContent = secretNumber;

// console.log(Number(document.querySelector('.guess').value));

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // console.log(typeof guess, guess);

  // if (!guess) {
  //   document.querySelector('.message').textContent = '⚠️ Not a Number!';
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😞 You lost the game!';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😞 You lost the game!';
  //   }

  if(!guess){
    document.querySelector('.message').textContent = '⚠️ Not a Number!';
  }
  else if(guess!==secretNumber){
    if (score > 1) {
          document.querySelector('.message').textContent = guess>secretNumber ? '📈 Too High!' : '📈 Too Low';
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          document.querySelector('.message').textContent = '😞 You lost the game!';
        }
  }
   else (guess === secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else {
      document.querySelector('.message').textContent = '😞 You lost the game!';
    }
  }
});

// Action for Again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  //background-color: #222
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing..';
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  // document.querySelector('.number').textContent = secretNumber;
});
