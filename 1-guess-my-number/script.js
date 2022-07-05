'use strict';

const body = document.querySelector('body');
const scoreNum = document.querySelector('.score');
const msg = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const num = document.querySelector('.number');
const guessNum = document.querySelector('.guess');

let score, secretNumber;
let highScore = 0;

const startNewGame = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  msg.textContent = 'Start guessing...';
  num.textContent = '?';
  guessNum.value = '';
  scoreNum.textContent = score;
  body.style.backgroundColor = '#222';
  num.style.backgroundColor = '#eee';
  return;
};

checkBtn.addEventListener('click', () => {
  const guess = +guessNum.value;
  if (!guess) {
    msg.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    msg.textContent = '🎉 Correct Number!';
    num.textContent = secretNumber;
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
    body.style.backgroundColor = '#60b347';
    num.style.backgroundColor = '#fff';
  } else {
    if (score > 1) {
      msg.textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      scoreNum.textContent = score;
    } else {
      msg.textContent = '💩 You lost the game!';
      scoreNum.textContent = 0;
    }
  }
});

resetBtn.addEventListener('click', startNewGame);
window.addEventListener('load', startNewGame);
