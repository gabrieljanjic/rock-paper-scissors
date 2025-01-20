"use strict";
////////////////*WELCOME SECTION*/////////////////
///////////*Info, exit button///////////
const info = document.querySelector(".info");
const exit = document.querySelector(".exit");
const infoDiv = document.querySelector(".info-div");

info.addEventListener("click", function (event) {
  event.stopPropagation();
  exit.classList.remove("hidden");
  infoDiv.classList.remove("hidden");
  info.classList.add("hidden");
});

exit.addEventListener("click", function (event) {
  event.stopPropagation();
  info.classList.remove("hidden");
  exit.classList.add("hidden");
  infoDiv.classList.add("hidden");
});
///////////*Entering game mod buttons*///////////
const welcomeScreen = document.querySelector(".welcome-screen");
const game3wayScreen = document.querySelector(".game-3way");
const game5wayScreen = document.querySelector(".game-5way");

const game3way = document.getElementById("game-mod-3way");
const game5way = document.getElementById("game-mod-5way");

game3way.addEventListener("click", function () {
  welcomeScreen.style.display = "none";
  game3wayScreen.style.display = "grid";
});
game5way.addEventListener("click", function () {
  welcomeScreen.style.display = "none";
  game5wayScreen.style.display = "grid";
});
///////////*Back button*///////////
const goBacks = document.querySelectorAll(".go-back");

goBacks.forEach(function (goBack) {
  goBack.addEventListener("click", function () {
    welcomeScreen.style.display = "block";
    game5wayScreen.style.display = "none";
    game3wayScreen.style.display = "none";
    info.classList.remove("hidden");
    exit.classList.add("hidden");
    infoDiv.classList.add("hidden");
  });
});
//////*Reset button*/////
const resets = document.querySelectorAll(".reset");
resets.forEach(function (reset) {
  reset.addEventListener("click", function () {
    if (reset.value === "reset") {
      console.log(reset.value);
      myScore = 0;
      botScore = 0;
      myResult.textContent = myScore;
      botResult.textContent = botScore;
      myPScore.style.display = "none";
      botPScore.style.display = "none";
      letsPlay.textContent = "Let's Play!";
      myChoice.innerHTML = "";
      botChoice.innerHTML = "";
    } else if (reset.value === "reset-5way") {
      console.log(reset.value);
      myScore5way = 0;
      botScore5way = 0;
      myResult5way.textContent = myScore5way;
      botResult5way.textContent = botScore5way;
      myPScore5way.style.display = "none";
      botPScore5way.style.display = "none";
      letsPlay5way.textContent = "Let's Play!";
      myChoice5way.innerHTML = "";
      botChoice5way.innerHTML = "";
    }
  });
});

//////////* GAME 3-WAY *////////////

const buttons = document.querySelectorAll(".choice-btn");
const myChoice = document.querySelector(".my-choice");
const botChoice = document.querySelector(".bot-choice");

const choices = ["rock", "paper", "scissors"];

const myResult = document.querySelector(".my-result");
const botResult = document.querySelector(".bot-result");
const letsPlay = document.querySelector(".lets-play");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const myPScore = document.querySelector(".my-p-score");
const botPScore = document.querySelector(".bot-p-score");

let myScore = 0;
let botScore = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons.forEach(function (btn) {
      btn.disabled = true;
    });
    ///////////*for reset button*///////////
    myPScore.style.display = "block";
    botPScore.style.display = "block";
    ///////////*display choices*///////////
    myChoice.classList.add("hidden");
    botChoice.classList.add("hidden");
    left.classList.remove("hidden");
    right.classList.remove("hidden");
    myPScore.classList.remove("hidden");
    botPScore.classList.remove("hidden");
    setTimeout(function () {
      left.classList.add("hidden");
      right.classList.add("hidden");
      botChoice.classList.remove("hidden");
      myChoice.classList.remove("hidden");

      //Added class to look more natural
      myChoice.innerHTML = `<img class="scale-1" src="imgs/${button.value}.png" />`;

      const botPick = choices[Math.floor(Math.random() * 3)];
      botChoice.innerHTML = `<img src="imgs/${botPick}.png" />`;

      if (button.value === botPick) {
        letsPlay.textContent = "Draw!";
      } else if (
        (button.value === "rock" && botPick === "scissors") ||
        (button.value === "paper" && botPick === "rock") ||
        (button.value === "scissors" && botPick === "paper")
      ) {
        myScore += 1;
        myResult.textContent = myScore;
        letsPlay.textContent = "You win!";
      } else {
        botScore += 1;
        botResult.textContent = botScore;
        letsPlay.textContent = "You lose!";
      }
      buttons.forEach(function (btn) {
        btn.disabled = false;
      });
    }, 1000);
  });
});

//////////* GAME 5-WAY *////////////
const buttons5way = document.querySelectorAll(".choice-btn-5way");
const myChoice5way = document.querySelector(".my-choice-5way");
const botChoice5way = document.querySelector(".bot-choice-5way");

const choices5way = ["rock", "paper", "scissors", "lizard", "spock"];
const myResult5way = document.querySelector(".my-result-5way");
const botResult5way = document.querySelector(".bot-result-5way");
const letsPlay5way = document.querySelector(".lets-play-5way");
const left5way = document.querySelector(".left-5way");
const right5way = document.querySelector(".right-5way");

const myPScore5way = document.querySelector(".my-p-score-5way");
const botPScore5way = document.querySelector(".bot-p-score-5way");

let myScore5way = 0;
let botScore5way = 0;

buttons5way.forEach(function (button) {
  button.addEventListener("click", function () {
    buttons5way.forEach(function (btn) {
      btn.disabled = true;
    });
    myPScore5way.style.display = "block";
    botPScore5way.style.display = "block";
    myChoice5way.classList.add("hidden");
    botChoice5way.classList.add("hidden");
    left5way.classList.remove("hidden");
    right5way.classList.remove("hidden");
    setTimeout(function () {
      left5way.classList.add("hidden");
      right5way.classList.add("hidden");
      botChoice5way.classList.remove("hidden");
      myChoice5way.classList.remove("hidden");

      myChoice5way.innerHTML = `<img class="scale-1" src="imgs/${button.value}.png" />`;

      const botPick = choices5way[Math.floor(Math.random() * 5)];
      botChoice5way.innerHTML = `<img src="imgs/${botPick}.png" />`;

      if (button.value === botPick) {
        letsPlay5way.textContent = "Draw!";
      } else if (
        (button.value === "rock" &&
          (botPick === "scissors" || botPick === "lizard")) ||
        (button.value === "paper" &&
          (botPick === "rock" || botPick === "spock")) ||
        (button.value === "scissors" &&
          (botPick === "paper" || botPick === "lizard")) ||
        (button.value === "lizard" &&
          (botPick === "spock" || botPick === "paper")) ||
        (button.value === "spock" &&
          (botPick === "scissors" || botPick === "rock"))
      ) {
        myScore5way += 1;
        myResult5way.textContent = myScore5way;
        letsPlay5way.textContent = "You win!";
      } else {
        botScore5way += 1;
        botResult5way.textContent = botScore5way;
        letsPlay5way.textContent = "You lose!";
      }
      buttons5way.forEach(function (btn) {
        btn.disabled = false;
      });
    }, 1000);
  });
});
