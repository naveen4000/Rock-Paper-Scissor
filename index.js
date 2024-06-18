let compScore = 0;
let userScore = 0;
const choices = document.querySelectorAll(".choice");
const mssg = document.querySelector(".mssg");
const userChoicePara = document.getElementById("score1");
const compChoicePara = document.getElementById("score2");

const gameDraw = () => {
  mssg.innerHTML = "Game was Drawn";
  mssg.style.backgroundColor = "#FFCF81";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    userChoicePara.innerText = userScore;
    mssg.innerHTML = `You win!! ${userChoice} beats your ${compChoice} 😊`;
    mssg.style.backgroundColor = "red";
  } else {
    compScore++;
    compChoicePara.innerText = compScore;
    mssg.style.backgroundColor = "green";
    mssg.innerHTML = `You lose!! ${compChoice} beats your ${userChoice} 😢`;
  }
};

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const playGame = (userChoice) => {
  const compChoice = gencompchoice();
  if (userChoice === compChoice) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "rock" ? false : true;
    } else {
      userWin = compChoice === "scissors" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});