let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

// Check button
document.querySelector('.check').addEventListener("click", function(){
  const guess = Number(document.querySelector('.guess').value);

  // Input case
  // No input case
  if(!guess){
    displayMessage("⚠️ No Number.");
  }
  else if(secretNumber === guess){
    displayMessage("🎉Yo myan. Wonderful job.");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#afd2a9';
    

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    score --;
  }
  else if(secretNumber !== guess){
    if (score > 1){
      secretNumber > guess ? displayMessage("📉 Number too low.") : displayMessage("📈 Number too high.");
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      displayMessage("💥 You lost the Game.");
      document.querySelector('.score').textContent = 20;
    }
  }

});

// Again button
document.querySelector('.again').addEventListener('click', function(){
  
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  // console.log(secretNumber);

  displayMessage("Start guessing...");
  document.querySelector('.number').textContent = "?";
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#0d0e0d';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = 20;

});



