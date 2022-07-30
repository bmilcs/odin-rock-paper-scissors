// Display game title to console
console.log("Welcome to Bryan Miller's rock paper scissors Project\n\n");

let buttons = Array.from(document.getElementsByTagName("button"));
let playerScoreBoard = document.querySelector(".playerContainer");
let computerScoreBoard = document.querySelector(".computerContainer");
let gameResult = document.querySelector(".gameResult");
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let roundTimeOut = 2000;

// Event: Begin round when icon is clicked
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playRound(button.id, getComputerChoice()));
    button.style.backgroundColor = "#11cc80";
  });
});

// Function: Play a single round of rock paper scissors
let playRound = function (playerSelection, computerSelection) {
  let computerIcon = document.getElementById(computerSelection);
  computerIcon.style.backgroundColor = "#db4437";
  if (playerSelection == computerSelection) {
    // gameResult.textContent = `It's a Tie! Try again!`;
    playRound(playerSelection, getComputerChoice());
    return;
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock")
  ) {
    gameResult.style.color = "#11cc80";
    gameResult.textContent = `You Win!\t${playerSelection} beats ${computerSelection}!`;
    playerScoreBoard.textContent = ++playerScore;
  } else {
    gameResult.textContent = `You Lose!\t${computerSelection} beats ${playerSelection}`;
    gameResult.style.color = "#db4437";
    computerScoreBoard.textContent = ++computerScore;
  }

  // Score Check
  if (playerScore + computerScore === 5) {
    tallyResults();
  } else {
    window.setTimeout(() => {
      gameResult.textContent = `Round ${playerScore + computerScore + 1}`;
      roundReset();
    }, roundTimeOut);
  }
};

// After each round, reset icons & gameResult
function roundReset() {
  buttons.forEach((button) => (button.style.backgroundColor = "white"));
  gameResult.style.color = "black";
}

// Function: Tally results of 5 games
function tallyResults() {
  window.setTimeout(() => {
    if (playerScore > computerScore) {
      gameResult.textContent = "Congratulations! You are the winner!";
    } else {
      gameResult.textContent =
        "Another one bites the dust! The computer is the winner!";
    }
  }, roundTimeOut);
  window.setTimeout(() => {
    computerScoreBoard.textContent = computerScore = 0;
    playerScoreBoard.textContent = playerScore = 0;
    gameResult.textContent = "Round 1";
    roundReset();
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
