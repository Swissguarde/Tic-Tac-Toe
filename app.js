const game = {
  xTurn: true,
  xState: [],
  oState: [],
  winningStates: [
    // ROWS
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],

    // COLUMNS
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],

    // DIAGONAL
    ["0", "4", "8"],
    ["2", "4", "6"],
  ],
};

document.addEventListener("click", (e) => {
  const target = e.target;
  const isCell = target.classList.contains("cell");
  const isDisabled = target.classList.contains("disabled");

  if (isCell && !isDisabled) {
    const cellValue = target.dataset.cellIndex;
    if (game.xTurn === true) {
      game.xState.push(cellValue);
    } else {
      game.oState.push(cellValue);
    }
    target.classList.add("disabled");
    target.classList.add(game.xTurn ? "x" : "o");
    game.xTurn = !game.xTurn;
    if (!document.querySelectorAll(".cell:not(.disabled)").length) {
      document.querySelector(".game-over").classList.add("visible");
      document.querySelector(".game-container").classList.add("opacity");
      document.querySelector(".game-over-text").textContent = "Draw";
    }
    game.winningStates.forEach((winningState) => {
      const xWins = winningState.every((state) => game.xState.includes(state));
      const oWins = winningState.every((state) => game.oState.includes(state));
      if (xWins || oWins) {
        document
          .querySelectorAll(".cell")
          .forEach((cell) => cell.classList.add("disabled"));
        document.querySelector(".game-over").classList.add("visible");
        document.querySelector(".game-over-text").textContent = xWins
          ? "xWIns!"
          : "oWIns!";
      }
    });
  }
});
document.querySelector('.restart').addEventListener('click', ()=>{
  document.querySelector(".game-over").classList.remove("visible")
  document.querySelectorAll(".cell").forEach(cell =>{
    cell.classList.remove('disabled', 'x', 'o')
  })
  game.xTurn = true
  game.xState = []
  game.oState = []
})

