'use strict';

const msg = document.querySelector('.message');
const checkBtn = document.querySelector('.check');

const num = Math.trunc(Math.random() * 20) + 1;
const secretNumber = (document.querySelector('.number').textContent = num);
let score = 20;

checkBtn.addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    msg.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    msg.textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      msg.textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg.textContent = '💩 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      msg.textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg.textContent = '💩 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
