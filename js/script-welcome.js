'use strict';

const welcomeScreen = document.querySelector('.welcome-screen');
const game3wayScreen = document.querySelector('.game-3way');
const game5wayScreen = document.querySelector('.game-5way');

const game3way = document.getElementById('game-mod-3way');
const game5way = document.getElementById('game-mod-5way');

const goBacks = document.querySelectorAll('.go-back');

game3way.addEventListener('click', function () {
  welcomeScreen.style.display = 'none';
  game3wayScreen.style.display = 'grid';
});
game5way.addEventListener('click', function () {
  welcomeScreen.style.display = 'none';
  game5wayScreen.style.display = 'grid';
});
goBacks.forEach(function (goBack) {
  goBack.addEventListener('click', function () {
    welcomeScreen.style.display = 'block';
    game5wayScreen.style.display = 'none';
    game3wayScreen.style.display = 'none';
  });
});
