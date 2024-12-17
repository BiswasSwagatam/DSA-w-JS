const kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let current = root;

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    n++;
    if (n === k) {
      return current.val;
    }
    current = current.right;
  }
};
