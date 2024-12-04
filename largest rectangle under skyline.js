function largestRectangleUnderSkyline(buildings) {
  let maxArea = 0;
  for (let i = 0; i < buildings.length; i++) {
    let currentHeight = buildings[i];
    let leftMost = i;
    while (leftMost > 0 && currentHeight <= buildings[leftMost - 1]) {
      leftMost--;
    }
    let rightMost = i;
    while (
      rightMost < buildings.length &&
      currentHeight <= buildings[rightMost + 1]
    ) {
      rightMost++;
    }

    const currentArea = (rightMost - leftMost + 1) * currentHeight;
    maxArea = Math.max(maxArea, currentArea);
  }

  return maxArea;
}
