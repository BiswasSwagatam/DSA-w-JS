function zeroSumSubarray(nums) {
  const sums = new Set([0]);
  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }

  return false;
}
