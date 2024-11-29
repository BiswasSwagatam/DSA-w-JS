let n = 3;

const mat = Array(2 * n - 1)
  .fill()
  .map(() => Array(2 * n - 1).fill(0));

function spiralTraverse(mat) {
  let startRow = 0;
  let endRow = mat.length - 1;
  let startCol = 0;
  let endCol = mat[0].length - 1;

  while (n >= 0) {
    for (let col = startCol; col <= endCol; col++) {
      mat[startRow][col] = n;
      mat[endRow][col] = n;
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      mat[row][endCol] = n;
      mat[row][startCol] = n;
    }
    // for(let col=endCol-1; col>=startCol; col--){
    //   if(startRow==endRow) break
    //   mat[endRow][col] = n
    // }
    // for(let row=endRow-1; row>startRow; row--){
    //   if(startCol==endCol) break
    //   mat[row][startCol] = n
    // }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
    n--;
  }
}

spiralTraverse(mat);
console.log(mat);
