function findClosestValueInBst(tree, target) {
    let currentNode = tree 
    let closest = currentNode.value
    while(currentNode != null){
      if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
        closest = currentNode.value
      }
      if(currentNode.value > target){
        currentNode = currentNode.left
      } else if(currentNode.value < target){
        currentNode = currentNode.right
      } else {
        break
      }
    }
    return closest
  }
  