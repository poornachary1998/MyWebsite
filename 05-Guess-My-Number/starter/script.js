'use strict';

// // Guess My number:
// // Retro design, to feel 80's game
// // Guess the secret number between 1 and 20
// // enter the number and click on check, score : 20 one failed will decrease score by 1
// // if your guess is correct at early attempt your score will be considered as higher score.Guess
//To generate a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//revealing secret number from ? symbol
// document.querySelector('.number').textContent = secretNumber;
//declaring score is 20
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//mouse click event
document.querySelector('.check').addEventListener('click', function () {
  //converting the user info type from string to Number using Number function
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //if the user does not give any number
  if (!guess) {
    // document.querySelector('.message').textContent = 'NO Number!!';
    displayMessage('No Number!!');
  }
  //if the secret number matches with the guess number
  else if (secretNumber === guess) {
    document.querySelector(
      '.message'
    ).textContent = `Yes, That's a right number`;
    //if the answer is right then it reveals the secret number from ? symbol
    document.querySelector('.number').textContent = secretNumber;
    //changing the background color to green and increasing width as the number is right
    document.querySelector('body').style.backgroundColor = '#60b333';
    document.querySelector('.number').style.width = '30 rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    // implementing ternary operator
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? `Guess is too high` : `Guess is too low`;
      score--;
      document.querySelector('.score').textContent = score;
    }
    //if the score is 0 then it should show us you lost the game
    else {
      //   document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //if the guess number is greater than the secret Number
  //   else if (secretNumber < guess) {
  //     //the score should not go beyond 0 it should tell us current score
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `Guess is too high!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //     //if the score is 0 then it should show us you lost the game
  //     else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //if the secret number is greater than the guess number
  //   else if (secretNumber > guess) {
  //     if (score > 1) {
  //       //the score should not go beyond 0 it should tell us current score
  //       document.querySelector('.message').textContent = `Guess is too low!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //     //if the score is 0  then it should show us you lost the game.
  //     else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
//reseting option after clicking again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Guess the number';
  displayMessage('Guess the number');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.highscore').textContent = highScore;
});
