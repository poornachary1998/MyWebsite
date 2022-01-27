'use strict';
const player0 =  document.querySelector('.player--0');
const player1 =  document.querySelector('.player--1');
const diceEl =  document.querySelector('.dice');
const score0El  = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
//both are same;selecting the elements

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore,activePlayer,playing;

const init = function(){
    //starting condition
 scores = [0,0];
 currentScore = 0;
 activePlayer = 0;
 playing  = true;
//new game conditions
score0El.textContent=0;
score1El.textContent=0;
currentScore0El.textContent = 0;
currentScore1El.textContent = 0;
//hide the dice before starting the dice
diceEl.classList.add('hidden');
//reset player
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.add('player--active');
player1.classList.remove('player--active');

}
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0; //If the active player is 0 then change the turn to player 1. else keep the active player as 0;

player0.classList.toggle('player--active');
player1.classList.toggle('player--active')
}

//Rolling dice functionality
btnRoll.addEventListener('click', function()
{ if (playing){
// 1. Generate a random number
const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
// 2.Display the dice
diceEl.classList.remove('hidden');
//2.a Now in html we have only one dice image, we need to show the different dice image based on rolling
diceEl.src = `dice-${dice}.png`;
// if the rolled dice is 1, then switch to next player
if(dice!==1){
//add the dice to current score
currentScore = currentScore + dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;//This records the score dynamically for both users
// currentScore0El.textContent = currentScore;this only records score for player 0
//change later

}
else{
// //switch the user(we created a function because we need to switch user in different scenario as well)
switchPlayer();
// document.getElementById(`current--${activePlayer}`).textContent = 0;
// currentScore = 0;
// activePlayer = activePlayer === 0 ? 1 : 0; //If the active player is 0 then change the turn to player 1. else keep the active player as 0;

// player0.classList.toggle('player--active');
// player1.classList.toggle('player--active')
}}
});
btnHold.addEventListener('click',function()
{
if (playing){
    //1. add current score to active player's score
scores[activePlayer]+= currentScore;

document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//2.check if player's score is >= 100
//FInish the game

if (scores[activePlayer]>=50){
    playing = false;

    // if active player is 1 and he wins the game, player--1 classlist adds properties mentioned in css .player-winner
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
//the other player who is active player 0 the class list will remove
document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
}
else{
//3.switch to next player
switchPlayer();
}
}
});
btnNew.addEventListener('click', init);
