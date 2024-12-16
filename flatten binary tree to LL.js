const flatten = function (root) {
  // let head = null
  // const helper = function(node) {
  //     if(node.right) helper(node.right)
  //     if(node.left) helper(node.left)
  //     node.left = null
  //     node.right = head
  //     head = node
  // }
  // if(root) helper(root)

  if (root === null) return null;
  let leftTail = flatten(root.left);
  let rightTail = flatten(root.right);

  if (root.left) {
    if (leftTail) {
      leftTail.right = root.right;
    }
    root.right = root.left;
    root.left = null;
  }

  return rightTail || leftTail || root;
};

/////////////////////////////////////

const flatten = function (root) {
  let head = null;
  const helper = function (node) {
    if (node.right) helper(node.right);
    if (node.left) helper(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };
  if (root) helper(root);
};
