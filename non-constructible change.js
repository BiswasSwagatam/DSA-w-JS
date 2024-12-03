function nonConstructibleChange(coins) {
  if (coins.length == 0) return 1;
  coins.sort((a, b) => a - b);
  let minChange = 0;
  for (const coin of coins) {
    if (coin > minChange + 1) return minChange + 1;
    minChange += coin;
  }
  return minChange + 1;
}
