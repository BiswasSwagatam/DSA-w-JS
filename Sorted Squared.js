function sortedSquaredArray(array) {
    const arr = new Array(array.length).fill(0)
    for(let i=0; i<array.length; i++){
      arr[i] = (array[i]*array[i])
    }
    arr.sort((a,b) => a-b)
    return arr;
  }