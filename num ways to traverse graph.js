function numberOfWaysToTraverseGraph(width, height) {
  const numWays = [];
  for (let i = 0; i < height + 1; i++) {
    numWays.push([]);
    for (let j = 0; j < width + 1; j++) {
      numWays[i].push(0);
    }
  }

  for (let widthId = 1; widthId < width + 1; widthId++) {
    for (let heightId = 1; heightId < height + 1; heightId++) {
      if (widthId == 1 || heightId == 1) {
        numWays[heightId][widthId] = 1;
      } else {
        let waysLeft = numWays[heightId][widthId - 1];
        let waysTop = numWays[heightId - 1][widthId];
        numWays[heightId][widthId] = waysLeft + waysTop;
      }
    }
  }
  return numWays[height][width];
}
