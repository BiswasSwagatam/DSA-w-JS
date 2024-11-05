function productSum(array, multiplier = 1) {
    let sum = 0
    for(const num of array){
      if(Array.isArray(num)){
        sum += productSum(num, multiplier + 1)
      } else {
        sum += num
      }
    }
    return sum * multiplier
  }