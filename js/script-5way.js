'use strict';

const buttons = document.querySelectorAll('.choice-btn-5way');
const myChoice = document.querySelector('.my-choice-5way');
const botChoice = document.querySelector('.bot-choice-5way');

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const myResult = document.querySelector('.my-result-5way');
const botResult = document.querySelector('.bot-result-5way');
const letsPlay = document.querySelector('.lets-play-5way');

const left = document.querySelector('.left-5way');
const right = document.querySelector('.right-5way');

const myPScore = document.querySelector('.my-p-score-5way');
const botPScore = document.querySelector('.bot-p-score-5way');
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

      const botPick = choices[Math.floor(Math.random() * 5)];
      botChoice.innerHTML = `<img src="imgs/${botPick}.png" />`;
      console.log(botPick);

      if (button.value === botPick) {
        letsPlay.textContent = 'Draw!';
      } else if (
        (button.value === 'rock' &&
          (botPick === 'scissors' || botPick === 'lizard')) ||
        (button.value === 'paper' &&
          (botPick === 'rock' || botPick === 'spock')) ||
        (button.value === 'scissors' &&
          (botPick === 'paper' || botPick === 'lizard')) ||
        (button.value === 'lizard' &&
          (botPick === 'spock' || botPick === 'paper')) ||
        (button.value === 'spock' &&
          (botPick === 'scissors' || botPick === 'rock'))
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
