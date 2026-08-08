let currentPlayer = "X";
let cells;

window.onload = function() {
  cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        cell.textContent = currentPlayer;

        if (checkWin()) {
          setTimeout(() => {
            alert(currentPlayer + " wins!");
            resetGame();
          }, 100);
          return;
        }

        if (isDraw()) {
          setTimeout(() => {
            alert("It's a draw!");
            resetGame();
          }, 100);
          return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
};

function checkWin() {
  const combos = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6]          // diagonals
  ];
  return combos.some(combo => {
    const [a,b,c] = combo;
    return cells[a].textContent &&
           cells[a].textContent === cells[b].textContent &&
           cells[a].textContent === cells[c].textContent;
  });
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== "");
}

function resetGame() {
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
}
