function minNumberOfJumps(array) {
  const jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] + j >= i) {
        jumps[i] = Math.min(jumps[i], 1 + jumps[j]);
      }
    }
  }
  return jumps[jumps.length - 1];
}
