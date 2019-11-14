var board1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var board2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 5, 2, 1, 9, 5, 3, 4, 8],
  [8, 7, 9, 7, 6, 1, 4, 2, 3],

  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var board3 = [
  [3, 5, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

var board4 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],

  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// mainline code
console.log(validSolution(board1));
console.log(validSolution(board2));
console.log(validSolution(board3));
console.log(validSolution(board4));

// functions
function matrixColumn(matrix, col) {
  return matrix.map(row => row[col]);
}

function matrixRow(matrix, row) {
  return matrix[row].slice();
}

function matrixCube(matrix, row, col, width) {
  var cube = [];
  for (var x = row; x < row + width; x++) {
    for (var y = col; y < col + width; y++) {
      cube.push(matrix[x][y]);
    }
  }
  return cube;
}

function doesItPass(array) {
  array.sort();
  for (x = 0; x < array.length - 1; x++) {
    // edge case, no zero allowed
    if (array[x] <= 0) return false;
    if (array[x + 1] > array.length) return false;

    if (array[x] == array[x + 1]) return false;
  }
  return true;
}

function validSolution(board) {
  var row;
  var col;
  var width = board.length;
  var cubeWidth = width / 3;

  for (row = 0; row < width; row++) {
    if (!doesItPass(matrixRow(board, row))) {
      console.log("row " + row + " : failed : " + matrixRow(board, row));
      console.log("this is an INVALID solution");
      return false;
    }
  }
  console.log("rows: Passed");

  for (col = 0; col < width; col++) {
    if (!doesItPass(matrixColumn(board, col))) {
      console.log("col " + col + " : failed : " + matrixColumn(board, col));
      console.log("this is an INVALID solution");
      return false;
    }
  }
  console.log("cols: Passed");

  for (row = 0; row < width; row += 3) {
    for (col = 0; col < width; col += 3) {
      if (!doesItPass(matrixCube(board, row, col, cubeWidth))) {
        console.log(
          "cube " +
            row +
            "," +
            col +
            " : failed : " +
            matrixCube(board, row, col, cubeWidth)
        );
        console.log("this is an INVALID solution");

        return false;
      }
    }
  }
  console.log("cubes: Passed");
  console.log("this is a VALID solution");

  return true;
}
