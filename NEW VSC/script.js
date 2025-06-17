const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".choice");
const playerDisplay = document.getElementById("player-choice");
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("game-result");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    playerDisplay.textContent = capitalize(playerChoice);
    computerDisplay.textContent = capitalize(computerChoice);
    resultDisplay.textContent = result;
  });
});

function getComputerChoice() {
  const randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function getResult(player, computer) {
  if (player === computer) {
    return "It's a draw! 🤝";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win! 🎉";
  } else {
    return "You lose! 💀";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
