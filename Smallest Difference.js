function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b)
    arrayTow.sort((a,b) => a-b)
    let id1 = 0
    let id2 = 0
    let smallest = Infinity
    let current = Infinity
    let smallestPair = []
    while(id1<arrayOne.length && id2<arrayTwo.length){
      let first = arrayOne[id1]
      let second = arrayTwo[id2]
      if(first < second){
        current = second - first
        id1++
      } else if(first > second){
        current = first - second
        id2++
      } else {
        return [first, second]
      }
      if (smallest > current){
        smallest = current
        smallestPair = [first, second]
      }
    }
    return smallestPair
  }