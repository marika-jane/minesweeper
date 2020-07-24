document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {};

// function genBoard () {
//   board.cells = [];
//   for (var i = 0; i < 4; i++) {
//     board.cells.push({row: 0, col: i, isMine: (Math.random() >= 0.5), hidden: true});
//     board.cells.push({row: 1, col: i, isMine: (Math.random() >= 0.5), hidden: true});
//     board.cells.push({row: 2, col: i, isMine: (Math.random() >= 0.5), hidden: true});
//     board.cells.push({row: 3, col: i, isMine: (Math.random() >= 0.5), hidden: true});
//   }
// }

//better generate board function with 2 for loops
function genBoard () {
  board.cells = [];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      board.cells.push({row: j, col: i, isMine: (Math.random() >= 0.7), hidden: true})
    }
  }
}

function startGame () {
  genBoard();
  for (var i = 0; i < board.cells.length; i++) {
     var cell = board.cells[i];
     var count = countSurroundingMines(cell);
     cell.surroundingMines = count;
  }
    // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var winCount = 0;
  for (var i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i];
    if (cell.isMine && cell.isMarked) {
      winCount++;
    } if (cell.isMine == false && cell.hidden == false) {
      winCount++;
    } 
  }
  if (winCount === board.cells.length) {
    lib.displayMessage('You win!')
  }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine) {
      count++;
    }
  }
  return count;
}

var refresh = document.getElementById("reload").onclick = reloadPage;

function reloadPage() {
  window.location.reload();
}


//original board code
// var board = {
//   cells: [{
//     row: 0,
//     col: 0,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 0,
//     col: 1,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 0,
//     col: 2,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 1,
//     col: 0,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 1,
//     col: 1,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 1,
//     col: 2,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 2,
//     col: 0,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 2,
//     col: 1,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }, {
//     row: 2,
//     col: 2,
//     isMine: (Math.random() >= 0.5),
//     hidden: true
//   }]
// };