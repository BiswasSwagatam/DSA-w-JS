const sumNumbers = function (root) {
  return helper(root, 0);
};

function helper(node, num) {
  if (!node) return 0;

  num = num * 10 + node.val;
  if (!node.left && !node.right) {
    return num;
  }

  return helper(node.left, num) + helper(node.right, num);
}
