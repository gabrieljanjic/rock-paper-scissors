'use strict';

const buttons = document.querySelectorAll('.choice-btn');
const myChoice = document.querySelector('.my-choice');
const botChoice = document.querySelector('.bot-choice');

const choices = ['rock', 'paper', 'scissors'];

const myResult = document.querySelector('.my-result');
const botResult = document.querySelector('.bot-result');
const letsPlay = document.querySelector('.lets-play');

const left = document.querySelector('.left');
const right = document.querySelector('.right');

const myPScore = document.querySelector('.my-p-score');
const botPScore = document.querySelector('.bot-p-score');
let myScore = 0;
let botScore = 0;
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    buttons.forEach(function (btn) {
      btn.disabled = true;
    });

    myChoice.classList.add('hidden');
    botChoice.classList.add('hidden');
    left.classList.remove('hidden');
    right.classList.remove('hidden');
    myPScore.classList.remove('hidden');
    botPScore.classList.remove('hidden');
    setTimeout(function () {
      left.classList.add('hidden');
      right.classList.add('hidden');
      botChoice.classList.remove('hidden');
      myChoice.classList.remove('hidden');

      //Added class to look more natural
      myChoice.innerHTML = `<img class="scale-1" src="imgs/${button.value}.png" />`;

      const botPick = choices[Math.floor(Math.random() * 3)];
      botChoice.innerHTML = `<img src="imgs/${botPick}.png" />`;

      if (button.value === botPick) {
        letsPlay.textContent = 'Draw!';
      } else if (
        (button.value === 'rock' && botPick === 'scissors') ||
        (button.value === 'paper' && botPick === 'rock') ||
        (button.value === 'scissors' && botPick === 'paper')
      ) {
        myScore += 1;
        myResult.textContent = myScore;
        letsPlay.textContent = 'You win!';
      } else {
        botScore += 1;
        botResult.textContent = botScore;
        letsPlay.textContent = 'You lose!';
      }
      buttons.forEach(function (btn) {
        btn.disabled = false;
      });
    }, 1000);
  });
});
