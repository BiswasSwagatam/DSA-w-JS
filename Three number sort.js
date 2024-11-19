function threeNumberSort(array, order) {
    let firstidx = 0
    for(let i=0; i<array.length; i++) {
      if(array[i] === order[0]) {
        let temp = array[firstidx]
        array[firstidx] = array[i]
        array[i] = temp
        firstidx++
      }
    }
    let lastidx = array.length-1
    for(let i=array.length-1; i>=firstidx; i--) {
      if(array[i] === order[2]){
        let temp = array[lastidx]
        array[lastidx] = array[i]
        array[i] = temp
        lastidx--
      }
    }
    return array
  }

//   ------------------------------------------------------

  function threeNumberSort(array, order) {
    let first = 0
    let second = 0
    let third = array.length - 1
    while(second <= third){
      const value = array[second]
      if(value === order[0]){
        let temp = array[second]
        array[second] = array[first]
        array[first] = temp
        first++
        second++
      } else if(value === order[1]){
        second++
      } else {
        let temp = array[third]
        array[third] = array[second]
        array[second] = temp
        third--
      }
    }
    return array
  }