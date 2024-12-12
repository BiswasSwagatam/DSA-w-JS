const convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  let id = 0;
  let d = 1;
  const rows = new Array(numRows).fill().map(() => []);
  for (const char of s) {
    rows[id].push(char);
    if (id === 0) {
      d = 1;
    } else if (id === numRows - 1) {
      d = -1;
    }
    id += d;
  }

  for (let i = 0; i < numRows; i++) {
    rows[i] = rows[i].join("");
  }

  return rows.join("");
};
