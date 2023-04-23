// have to understand user click on which cell ( make Array )
const cellElements = document.querySelectorAll(".game-board .cell");
// to target on player 1 & 2
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");

const result = document.querySelector(".result");
const result_text = document.querySelector(".result h1");
const result_btn = document.querySelector(".result button");

const playerO = "O";
const playerX = "X";

// to check x or O in same Line
const WINING_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// to make toggle
let toggleTurn = true;

// foreach loop
// make loop on array
// cellElements one by one array will add in cell
cellElements.forEach((cell) => {
  // use onclick on every cell
  cell.onclick = () => {
    // using coditional operator for toggle
    let currentPlayer = toggleTurn ? playerO : playerX;
    //show cell
    // cell can click only one time
    cell.classList.add("disabled");
    // cell.innerhtml = ""
    addInCell(cell, currentPlayer);
    if (winnerCheck(currentPlayer)) {
      addInActive();
      result_text.innerHTML = currentPlayer + " is win the Game";
    } else if (isDraw()) {
      addInActive();
      result_text.innerHTML = "Draw the Game!!!";
    } else {
      swapPlayer();
    }
  };
});

function isDraw() {
  return [...cellElements].every((cell) => {
    return cell.classList.contains(playerX) || cell.classList.contains(playerO);
  });
}

function winnerCheck(currentPlayer) {
  return WINING_CONDITION.some((condition) => {
    return condition.every((index) => {
      // contains will check O or X is in that cell or not
      // when it get O or X will return
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
}

function swapPlayer() {
  // if toggle is true so it will show false
  toggleTurn = !toggleTurn;
  if (toggleTurn) {
    player1.classList.add("active");
    player2.classList.remove("active");
  } else {
    player2.classList.add("active");
    player1.classList.remove("active");
  }
}

function addInCell(cell, currentPlayer){
    cell.innerHTML = currentPlayer;
    cell.classList.add(currentPlayer);
}

result_btn.onclick = () => {
    location.reload();
}

function addInActive(){
    result.classList.remove("inactive");
}