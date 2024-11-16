function moveElementToEnd(array, toMove) {
    let left = 0
    let right = array.length - 1
    while(right > left) {
      while(right > left && array[right] === toMove) right--
      if(array[left] === toMove){
        let temp = array[left]
        array[left] = array[right]
        array[right] = temp
      }
      left++
    }
    return array
  }