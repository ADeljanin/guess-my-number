"use script";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const btnCheck = document.querySelector(".btn-check");
const btnChange = document.querySelectorAll(".btn-change");
const numberInput = document.querySelector(".number-input");

//--------INPUT --------------------------------
//
numberInput.addEventListener("keyup", function () {
  btnCheck.disabled = false;
  btnCheck.style.cursor = "pointer";
});

function stepUp() {
  document.getElementById("input").stepUp(1);
}

function stepDown() {
  document.getElementById("input").stepDown(1);
}

//--------CHECK BUTTON ------------------------//

btnCheck.addEventListener("click", function () {
  const guess = Number(document.querySelector(".number-input").value);
  if (guess > 0 && guess <= 20) {
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to top,rgba(255, 255, 255, 0.8),#339af0), url(../img/numbers.jpg)";
    if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🥇 Correct number";
      document.querySelector(".secret-number").textContent = secretNumber;
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(to top,rgba(255, 255, 255, 0.8),rgb(25, 214, 57)), url(../img/numbers.jpg)";
      document.querySelector(".secret-number").style.width = "100%";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
      btnCheck.disabled = true;
      btnCheck.style.backgroundColor = "#c4c4c4";
      numberInput.disabled = true;
      numberInput.style.backgroundColor = "#c4c4c4";
      btnChange.forEach(function (button) {
        button.disabled = true;
        button.style.backgroundColor = "#c4c4c4";
      });
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector("body").style.backgroundColor = "#74c0fc";
        document.querySelector(".message").textContent =
          guess > secretNumber ? "🔼 Too high" : "🔽 Too low";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "💥 You lost the game!";
        document.querySelector(".score").textContent = 0;
        document.querySelector("body").style.backgroundImage =
          "linear-gradient(to top,rgba(255, 255, 255, 0.8),#d42525), url(../img/numbers.jpg)";
        btnCheck.disabled = true;
        btnCheck.style.backgroundColor = "#c4c4c4";
        numberInput.disabled = true;
        numberInput.style.backgroundColor = "#c4c4c4";
        btnChange.forEach(function (button) {
          button.disabled = true;
          button.style.backgroundColor = "#c4c4c4";
        });
      }
    }
  }
});

btnCheck.addEventListener("mouseenter", function () {
  btnCheck.style.backgroundColor = "#1c7ed6";
  btnCheck.style.color = "#fff";
});
btnCheck.addEventListener("mouseleave", function () {
  btnCheck.style.backgroundColor = "#d0ebff";
  btnCheck.style.color = "#333";
});

//--------AGAIN BUTTON ---------------------//

document.querySelector(".btn-again").addEventListener("click", function () {
  document.querySelector(".btn-container").style.display = "flex";
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to top,rgba(255, 255, 255, 0.8),#339af0), url(../img/numbers.jpg)";
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent =
    "Start guessing from 1 to 20...";
  document.querySelector(".number-input").value = "10";
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#74c0fc";
  document.querySelector(".secret-number").style.width = "50%";
  btnCheck.disabled = false;
  btnCheck.style.backgroundColor = "#d0ebff";
  btnCheck.style.color = "#333";
  numberInput.disabled = false;
  numberInput.style.backgroundColor = "#d0ebff";
  btnChange.forEach(function (button) {
    button.disabled = false;
    button.style.backgroundColor = "#d0ebff";
  });

  btnCheck.style.cursor = "pointer";
});
