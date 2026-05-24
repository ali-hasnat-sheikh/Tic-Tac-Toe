let currentPlayer = prompt("Choose one symbol X or O:");
if(currentPlayer !== 'X' && currentPlayer !== 'O'){
  alert("Enter correct symbol!");
}
const initialOX = currentPlayer;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let cells = document.getElementsByClassName("btn");
let rset = document.querySelector("#reset");
rset.addEventListener("click", () => {
  reset();
});
for (let cell of cells) {
  cell.addEventListener("click", () => {
    if (cell.innerText) return;
    cell.innerText = currentPlayer;
    if (checkWin()) {
      return;
    }
    if (checkDraw()) {
      return;
    }
    switchPlayer();
  });
}
let switchPlayer = () => {
  currentPlayer = currentPlayer === "O" ? "X" : "O";
};
let reset = () => {
  for (const cell of cells) {
    cell.innerText = "";
  }
  currentPlayer = initialOX;
};
let checkWin = () => {
  for (const [a, b, c] of winPatterns) {
    const v = cells[a].innerText;
    if (v && v === cells[b].innerText && v === cells[c].innerText) {
      setTimeout(() => {
        alert(`Congratulations! Player ${currentPlayer} won the game.`);
        reset();
      }, 250);


      return true;
    }
  }
  return false;
};
let checkDraw = () => {
  let filled = Array.from(cells).every((cell) => cell.innerText !== "");
  if (filled) {
    setTimeout(()=>{
      alert("The game is a DRAW.");
      reset();
    }, 250);
    return true;
  }
  return false;
};
