// Display game title to console
console.log("Welcome to Bryan Miller's rock paper scissors Project\n\n");

let buttons = Array.from(document.getElementsByTagName("button"));
let playerScoreBoard = document.querySelector(".playerContainer");
let computerScoreBoard = document.querySelector(".computerContainer");
let gameResult = document.querySelector(".gameResult");
let gameContainer = document.querySelector(".gameContainer");
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let roundTimeOut = 3000;
let colorGreen = "#11cc80";
let colorRed = "#db4437";
let colorBlack = "#313131";
let colorBlue = "#4285f4";
let colorGrey = "#BABCBE";
let colorYellow = "#F4b400";

// Enable buttons: Adds "enabled" class
enableButtons();

// Add EventListener to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => clickHandler(button));
  button.addEventListener("mouseover", () => highlightButton(button));
  button.addEventListener("mouseleave", () => resetButton(button));
});

// Mouse Enter: Highlight Button
function highlightButton(button) {
  if (button.classList.contains("enabled")) {
    button.style.border = "5px solid " + colorBlue;
  }
}

// Mouse Leave: Remove Highlight Button
function resetButton(button) {
  if (button.classList.contains("enabled")) {
    button.style.border = "0px";
  }
}

// Play Round on Click Event
function clickHandler(button) {
  if (button.classList.contains("enabled")) {
    disableButtons();
    button.classList.toggle("selected");
    // Player's Selection:
    button.style.backgroundColor = colorBlue;
    button.style.border = "3px solid black";
    playRound(button.id, getComputerChoice());
  }
}

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

// Function: Play a single round of rock paper scissors
let playRound = function (playerSelection, computerSelection) {
  let computerIcon = document.getElementById(computerSelection);

  // Disable tie, call original function again & return
  if (playerSelection == computerSelection) {
    playRound(playerSelection, getComputerChoice());
    return;
  }

  // Not a tie: Highlight computer's selection
  computerIcon.classList.add("selected");
  computerIcon.style.border = "3px solid black";
  gameResult.style.color = "white";

  // Find unused button and apply notSelected class
  buttons.forEach((button) => {
    if (!button.classList.contains("selected")) {
      button.classList.add("notSelected");
    }
  });

  if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock")
  ) {
    // Player has won
    gameResult.style.backgroundColor = colorGreen;
    playerScoreBoard.textContent = ++playerScore;
    gameResult.textContent = `You Win!\t${toTitleCase(
      playerSelection
    )} beats ${toTitleCase(computerSelection)}!`;
  } else {
    // Computer has own
    gameResult.style.backgroundColor = colorRed;
    computerScoreBoard.textContent = ++computerScore;
    gameResult.textContent = `You Lose!\t${toTitleCase(
      computerSelection
    )} beats ${toTitleCase(playerSelection)}!`;
  }

  // Score Check
  window.setTimeout(() => {
    if (playerScore + computerScore === 5) {
      tallyResults();
    } else {
      gameResult.textContent = `Round ${playerScore + computerScore + 1}`;
      resetRound();
      enableButtons();
    }
  }, roundTimeOut);
};

// After each round, reset icons & gameResult
function resetRound() {
  buttons.forEach((button) => {
    button.style.backgroundColor = "white";
    button.style.border = "0px";
    button.classList.remove("selected");
    button.classList.remove("notSelected");
  });
  gameContainer.style.backgroundColor = "white";
  gameResult.style.backgroundColor = "white";
  gameResult.style.color = colorBlack;
  gameResult.style.fontSize = "24px";
}

// Function: Tally results of 5 games
function tallyResults() {
  resetRound();
  buttons.forEach((button) => button.classList.add("notSelected"));
  gameResult.style.color = "white";
  gameResult.style.backgroundColor = "";

  gameResult.style.fontSize = "32px";
  if (playerScore > computerScore) {
    gameResult.textContent = "You are the winner of 5 rounds!";
    gameContainer.style.backgroundColor = colorGreen;
  } else {
    gameResult.textContent = "The computer is the winner of 5 rounds!";
    gameContainer.style.backgroundColor = colorRed;
  }

  window.setTimeout(() => {
    computerScoreBoard.textContent = computerScore = 0;
    playerScoreBoard.textContent = playerScore = 0;
    gameResult.textContent = "Let's Play Again!";
    resetRound();
    enableButtons();
  }, 4500);
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
