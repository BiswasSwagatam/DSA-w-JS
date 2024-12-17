const getMinimumDifference = function (root) {
  return DFS(root, -Infinity, Infinity);
};

function DFS(node, low, high) {
  if (!node) return high - low;
  const left = DFS(node.left, low, node.val);
  const right = DFS(node.right, node.val, high);
  return Math.min(left, right);
}
