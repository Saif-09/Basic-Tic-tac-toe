const cells = document.querySelectorAll("td");
const resetButton = document.querySelector("#reset");
const result = document.querySelector("#result");

let player = "X";
let theme = "light-theme";

cells.forEach(cell => {
  cell.addEventListener("click", e => {
    if (!cell.textContent) {
      cell.textContent = player;
      cell.classList.add(theme);

      if (checkWin(player)) {
        result.textContent = `Player ${player} wins!`;
        result.classList.add(theme);
      } else if (checkDraw()) {
        result.textContent = "Draw!";
        result.classList.add(theme);
      }

      player = player === "X" ? "O" : "X";
    }
  });
});

resetButton.addEventListener("click", e => {
  reset();
  result.textContent = "";
  result.classList.remove(theme);
});

function checkWin(player) {
  if (
    (cells[0].textContent === player &&
      cells[1].textContent === player &&
      cells[2].textContent === player) ||
    (cells[3].textContent === player &&
      cells[4].textContent === player &&
      cells[5].textContent === player) ||
    (cells[6].textContent === player &&
      cells[7].textContent === player &&
      cells[8].textContent === player) ||
    (cells[0].textContent === player &&
      cells[3].textContent === player &&
      cells[6].textContent === player) ||
    (cells[1].textContent === player &&
      cells[4].textContent === player &&
      cells[7].textContent === player) ||
    (cells[2].textContent === player &&
      cells[5].textContent === player &&
      cells[8].textContent === player) ||
    (cells[0].textContent === player &&
      cells[4].textContent === player &&
      cells[8].textContent === player) ||
    (cells[2].textContent === player &&
      cells[4].textContent === player &&
      cells[6].textContent === player)
  ) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (const cell of cells) {
    if (!cell.textContent) {
      return false;
    }
  }
  return true;
}

function reset() {
  for (const cell of cells) {
    cell.textContent = "";
    cell.classList.remove(theme);
  }
  player = "X";
  result.textContent = "";
}
``
