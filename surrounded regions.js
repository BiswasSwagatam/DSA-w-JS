const solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function dfs(i, j) {
    board[i][j] = "Y";
    for (const [x, y] of directions) {
      const ix = i + x;
      const jy = j + y;
      if (
        ix > 0 &&
        ix < m - 1 &&
        jy > 0 &&
        jy < n - 1 &&
        board[ix][jy] === "O"
      ) {
        dfs(ix, jy);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (board[i][j] === "O") {
          dfs(i, j);
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "Y") board[i][j] = "O";
    }
  }
  // return board
};
