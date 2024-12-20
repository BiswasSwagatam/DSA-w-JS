function spiralTraverse(array) {
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow == endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol == endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

////////////////////////////////////////////////////////////

const spiralOrder = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let x = 0;
  let y = 0;
  let dx = 1;
  let dy = 0;
  const res = [];

  for (let i = 0; i < rows * cols; i++) {
    res.push(matrix[y][x]);
    matrix[y][x] = ".";

    if (
      !(x + dx >= 0 && x + dx < cols && y + dy >= 0 && y + dy < rows) ||
      matrix[y + dy][x + dx] === "."
    ) {
      [dx, dy] = [-dy, dx];
    }

    x += dx;
    y += dy;
  }

  return res;
};
