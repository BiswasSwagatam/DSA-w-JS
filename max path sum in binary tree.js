function maxPathSum(tree) {
  let [_, maxSum] = findMaxSum(tree);
  return maxSum;
}

function findMaxSum(tree) {
  if (tree == null) return [0, -Infinity];

  let [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  let [rightmaxSumAsBranch, rightMaxPathsum] = findMaxSum(tree.right);

  let maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightmaxSumAsBranch);

  let value = tree.value;
  let maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  let maxSumAsRoot = Math.max(
    leftMaxSumAsBranch + value + rightmaxSumAsBranch,
    maxSumAsBranch
  );
  let maxPathSum = Math.max(leftMaxPathSum, rightMaxPathsum, maxSumAsRoot);

  return [maxSumAsBranch, maxPathSum];
}
