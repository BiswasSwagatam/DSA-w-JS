const numIslands = function (matrix) {
  let count = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "1") {
        count++;
        dfs(matrix, row, col);
      }
    }
  }
  return count;
};

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(matrix, row, col) {
  matrix[row][col] = "0";

  for (let direction of directions) {
    const nextRow = row + direction[0];
    const nextCol = col + direction[1];

    if (
      nextRow >= 0 &&
      nextRow <= matrix.length - 1 &&
      nextCol >= 0 &&
      nextCol <= matrix[0].length - 1 &&
      matrix[nextRow][nextCol] === "1"
    ) {
      dfs(matrix, nextRow, nextCol);
    }
  }
}
