// Display game title to console
console.log("Welcome to Bryan Miller's rock paper scissors Project\n\n");

let buttons = Array.from(document.getElementsByTagName("button"));
let playerScoreBoard = document.querySelector(".playerContainer");
let computerScoreBoard = document.querySelector(".computerContainer");
let gameResult = document.querySelector(".gameResult");
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let roundTimeOut = 2500;
let colorGreen = "#11cc80";
let colorRed = "#db4437";
let colorBlack = "#313131";
let colorBlue = "#4285f4";
let colorGrey = "#BABCBE";

// Add EventListener to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => eventHandler(button));
});

// Call enableButton function (adds "enabled" class)
enableButtons();

// Enable EventListener via class-based conditional
function enableButtons() {
  buttons.forEach((button) => {
    button.classList.add("enabled");
  });
}

// Disable EventListener via class-based conditional
function disableButtons() {
  buttons.forEach((button) => {
    button.classList.remove("enabled");
  });
}

// PlayRound EventHandler
function eventHandler(button) {
  if (button.classList.contains("enabled")) {
    disableButtons();
    playRound(button.id, getComputerChoice());
    // Player's Selection:
    button.style.backgroundColor = colorBlue;
    button.style.border = "3px solid black";
  }
}

// Function: Play a single round of rock paper scissors
let playRound = function (playerSelection, computerSelection) {
  let computerIcon = document.getElementById(computerSelection);
  computerIcon.style.backgroundColor = colorGrey;
  computerIcon.style.border = "3px solid black";
  gameResult.style.color = "white";

  // Disable tie, call original function again & return
  if (playerSelection == computerSelection) {
    playRound(playerSelection, getComputerChoice());
    return;
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock")
  ) {
    gameResult.style.backgroundColor = colorGreen;
    playerScoreBoard.textContent = ++playerScore;
    gameResult.textContent = `You Win!\t${toTitleCase(
      playerSelection
    )} beats ${toTitleCase(computerSelection)}!`;
  } else {
    gameResult.style.backgroundColor = colorRed;
    computerScoreBoard.textContent = ++computerScore;
    gameResult.textContent = `You Lose!\t${toTitleCase(
      computerSelection
    )} beats ${toTitleCase(playerSelection)}!`;
  }

  // Score Check
  if (playerScore + computerScore === 5) {
    tallyResults();
  } else {
    window.setTimeout(() => {
      gameResult.textContent = `Round ${playerScore + computerScore + 1}`;
      resetRound();
    }, roundTimeOut);
  }
};

// After each round, reset icons & gameResult
function resetRound() {
  buttons.forEach((button) => {
    button.style.backgroundColor = "white";
    button.style.border = "0px";
  });
  gameResult.style.backgroundColor = "white";
  gameResult.style.color = colorBlack;
  gameResult.style.fontSize = "24px";
  enableButtons();
}

// Function: Tally results of 5 games
function tallyResults() {
  gameResult.style.color = "white";
  window.setTimeout(() => {
    gameResult.style.fontSize = "32px";
    if (playerScore > computerScore) {
      gameResult.style.backgroundColor = colorGreen;
      gameResult.textContent = "You are the winner of 5 rounds!";
    } else {
      gameResult.style.backgroundColor = colorRed;
      gameResult.textContent = "The computer is the winner of 5 rounds!";
    }
  }, roundTimeOut);
  window.setTimeout(() => {
    computerScoreBoard.textContent = computerScore = 0;
    playerScoreBoard.textContent = playerScore = 0;
    gameResult.textContent = "Let's Play Again!";
    resetRound();
  }, 5000);
}

// Function: Randomly return rock, paper or scissors for Computer's Selection
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let randomNumber = getRandomInt(0, computerChoice.length);
  return computerChoice[randomNumber];
}

// Function: Generate a random number between 2 values
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function toTitleCase(string) {
  if (string === "") {
    return;
  }

  let titleCase = string.toLowerCase();
  let firstLetter = titleCase.charAt();
  return titleCase.replace(/^./, firstLetter.toUpperCase());
}
