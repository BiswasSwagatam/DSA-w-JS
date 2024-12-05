function staircaseTraversal(height, maxSteps) {
  return calculateSteps(height, maxSteps);
}

function calculateSteps(height, maxSteps) {
  if (height <= 1) return 1;

  let numSteps = 0;
  for (let step = 1; step < Math.min(height, maxSteps) + 1; step++) {
    numSteps += calculateSteps(height - step, maxSteps);
  }
  return numSteps;
}

/////////////////////////////////////////////

function staircaseTraversal(height, maxSteps) {
  let currentNoOfWays = 0;
  const waysToTop = [1];
  for (let currentHeight = 1; currentHeight < height + 1; currentHeight++) {
    const start = currentHeight - maxSteps - 1;
    const end = currentHeight - 1;
    if (start >= 0) currentNoOfWays -= waysToTop[start];

    currentNoOfWays += waysToTop[end];
    waysToTop.push(currentNoOfWays);
  }
  return waysToTop[height];
}
