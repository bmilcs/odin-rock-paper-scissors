// Display game title to console
console.log("Welcome to Bryan Miller's rock paper scissors Project\n\n");

let buttons = Array.from(document.getElementsByTagName("button"));
let playerScoreBoard = document.querySelector(".playerContainer");
let computerScoreBoard = document.querySelector(".computerContainer");
let gameResult = document.querySelector(".gameResult");
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(playRound(button.id, getComputerChoice()));
  });
});

// Function: Play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    gameResult.textContent = `It's a Tie! Try again!`;
  } else if (
    (playerSelection === "rock" && computerSelection == "scissors") ||
    (playerSelection === "scissors" && computerSelection == "paper") ||
    (playerSelection === "paper" && computerSelection == "rock")
  ) {
    gameResult.textContent = `You Win!\t${playerSelection} beats ${computerSelection}!`;
    playerScoreBoard.textContent = ++playerScore;
  } else {
    gameResult.textContent = `You Lose!\t${computerSelection} beats ${playerSelection}`;
    computerScoreBoard.textContent = ++computerScore;
  }

  // Score Check
  if (playerScore + computerScore === 5) {
    tallyResults();
  }
}

// Function: Tally results of 5 games
function tallyResults() {
  if (playerScore > computerScore) {
    gameResult.textContent = "YOU WIN!!!";
  } else {
    gameResult.textContent = "LOOOOOSER!";
  }
  computerScoreBoard.textContent = computerScore = 0;
  playerScoreBoard.textContent = playerScore = 0;
}

// Play 5-Round Game
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let gameResult;

  playerSelection = "";
  finalResults.innerHTML = playRound(playerSelection, getComputerChoice());

  console.log(result);

  if (result.includes("You Win")) playerScore++;
  else if (result.includes("You Lose")) computerScore++;

  console.log(
    `Final Score:\nPlayer:\t\t${playerScore}\nComputer:\t${computerScore}`
  );

  // calculate final score
  if (playerScore === computerScore)
    console.log(`It's a Tie! You both won ${playerScore} out of 5 games!`);
  else if (playerScore > computerScore)
    console.log(`You Win! You won by ${playerScore - computerScore} game(s)!`);
  else
    console.log(
      `You Lose! You lost by ${computerScore - playerScore} game(s)!`
    );
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

// Function: Convert string to title case (from exercises)
function toTitleCase(string) {
  if (string === "") {
    return;
  }
  let titleCase = string.toLowerCase();
  let firstLetter = titleCase.charAt();
  return titleCase.replace(/^./, firstLetter.toUpperCase());
}
