class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let newLLHeadPointer = new LinkedList(0)
    let currentNode = newLLHeadPointer
    let carry = 0
  
    let nodeOne = linkedListOne
    let nodeTwo = linkedListTwo
  
    while(nodeOne !== null || nodeTwo !== null || carry !== 0){
      let valueOne = nodeOne !== null ? nodeOne.value : 0
      let valueTwo = nodeTwo !== null ? nodeTwo.value : 0
      let sumValues = valueOne + valueTwo + carry
  
      let newValue = sumValues % 10
      let newNode = new LinkedList(newValue)
      currentNode.next = newNode
      currentNode = newNode
  
      carry = Math.floor(sumValues/10)
      nodeOne = nodeOne !== null ? nodeOne.next : null
      nodeTwo = nodeTwo !== null ? nodeTwo.next : null
    }
    return newLLHeadPointer.next
  }