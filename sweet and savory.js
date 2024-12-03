function sweetAndSavory(dishes, target) {
  const sweetDishes = dishes.filter((dish) => dish < 0).sort((a, b) => b - a);
  const savoryDishes = dishes.filter((dish) => dish > 0).sort((a, b) => a - b);

  let bestPair = [0, 0];
  let smallestDifference = Infinity;
  let sweetId = 0;
  let savoryId = 0;

  while (sweetId < sweetDishes.length && savoryId < savoryDishes.length) {
    let sum = sweetDishes[sweetId] + savoryDishes[savoryId];

    if (sum <= target) {
      let currentDiff = target - sum;
      if (currentDiff < smallestDifference) {
        smallestDifference = currentDiff;
        bestPair = [sweetDishes[sweetId], savoryDishes[savoryId]];
      }
      savoryId++;
    } else {
      sweetId++;
    }
  }

  return bestPair;
}
