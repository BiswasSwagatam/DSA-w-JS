const isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};

function isMirror(n, m) {
  if (!n && !m) {
    return true;
  }
  if (!n || !m) {
    return false;
  }

  return (
    n.val === m.val && isMirror(n.left, m.right) && isMirror(n.right, m.left)
  );
}
