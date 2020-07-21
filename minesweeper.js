document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: false,
    hidden: true
  }, {
    row: 0,
    col: 1,
    isMine: true,
    hidden: true
  }, {
    row: 0,
    col: 2,
    isMine: true,
    hidden: true
  }, {
    row: 1,
    col: 0,
    isMine: true,
    hidden: true
  }, {
    row: 1,
    col: 1,
    isMine: false,
    hidden: true
  }, {
    row: 1,
    col: 2,
    isMine: false,
    hidden: true
  }, {
    row: 2,
    col: 0,
    isMine: true,
    hidden: true
  }, {
    row: 2,
    col: 1,
    isMine: true,
    hidden: true
  }, {
    row: 2,
    col: 2,
    isMine: true,
    hidden: true
  }]
};

function startGame () {
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

