const countNodes = function (root) {
  let count = [0];
  helper(root, count);
  return count[0];
};

function helper(node, count) {
  if (node === null) {
    return;
  } else {
    count[0] = count[0] + 1;
  }
  helper(node.left, count);
  helper(node.right, count);
}
