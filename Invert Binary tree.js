function invertBinaryTree(tree) {
    if (tree === null) return
    swap(tree)
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
  }
  
  function swap(tree){
    let left = tree.left
    tree.left = tree.right
    tree.right = left
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }