// how to  let current player play.
let currentPlayer = "X";

// Function to let a  handle cell click/checker for winner or full board and display results
function handleCellClick(cell) {
  if (cell.innerHTML === "") {
    cell.className = `player${currentPlayer}`;
    cell.innerHTML = currentPlayer;
    if (checkForWinner() || isBoardFull()) {
      displayGameResult();
    } else {
      switchPlayer();
    }
  }
}
//function to switch the current player
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById(
    "playerTurn"
  ).innerText = `It's ${currentPlayer}'s turn`;
}

function checkForWinner() {
  const cells = document.querySelectorAll("#ticTacToeGrid td");

  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      cells[i * 3].innerHTML !== "" &&
      cells[i * 3].innerHTML === cells[i * 3 + 1].innerHTML &&
      cells[i * 3 + 1].innerHTML === cells[i * 3 + 2].innerHTML
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      cells[i].innerHTML !== "" &&
      cells[i].innerHTML === cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML === cells[i + 6].innerHTML
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    cells[0].innerHTML !== "" &&
    cells[0].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[8].innerHTML
  ) {
    return true;
  }

  if (
    cells[2].innerHTML !== "" &&
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[4].innerHTML === cells[6].innerHTML
  ) {
    return true;
  }

  return false;
}
// function to see if the board is full
function isBoardFull() {
  const cells = document.querySelectorAll("#ticTacToeGrid td");
  for (const cell of cells) {
    if (cell.innerHTML === "") {
      return false;
    }
  }
  return true;
}
//function to see game play result
function displayGameResult() {
  const alert = document.getElementById("game-result-alert");
  const resultText = document.getElementById("game-result-text");
  if (checkForWinner()) {
    resultText.innerText = `Player ${currentPlayer} wins!`;
  } else {
    resultText.innerText = "It's a draw!";
  }
  alert.style.display = "block";
}
//function to restart game
function restartGame() {
  const cells = document.querySelectorAll("#ticTacToeGrid td");
  for (const cell of cells) {
    cell.innerHTML = "";
  }
  currentPlayer = "X";
  document.getElementById("playerTurn").innerText = `It's X's turn`;
  document.getElementById("game-result-alert").style.display = "none";
}
