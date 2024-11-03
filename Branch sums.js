class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    const sums = []
    calculateBranchSums(root, 0, sums)
    return sums
  }
  
  function calculateBranchSums(node, newRunningsum, sums){
    if(!node){
      return
    }
    
    newRunningsum = newRunningsum + node.value
    if(!node.left && !node.right){
      sums.push(newRunningsum)
      return
    }
    calculateBranchSums(node.left, newRunningsum, sums)
    calculateBranchSums(node.right, newRunningsum, sums)
  }