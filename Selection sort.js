function selectionSort(array) {
    let index = 0
    while(index < array.length - 1){
      let smallestIndex = index
      for(let i=index+1; i<array.length; i++){
        if(array[smallestIndex] > array[i]){
          smallestIndex = i
        }
      }
      let temp = array[index]
      array[index] = array[smallestIndex]
      array[smallestIndex] = temp
      index++
    }
    return array
  }