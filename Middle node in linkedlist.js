class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    let currentNode = linkedList
    let temp = currentNode
    let length = 0
    while(temp !== null){
      temp = temp.next
      length++
    }
    if(length % 2 == 0){
      for(let i=1; i<((length/2) + 1); i++){
        currentNode = currentNode.next
      }
    } else {
      for(let i=1; i<=Math.floor(length/2); i++){
        currentNode = currentNode.next
      }
    }
    return currentNode;
  }