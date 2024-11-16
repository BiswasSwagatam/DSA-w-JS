function largestRange(array) {
    let range = []
    let longestLength = 0
    let nums = {}
    for(let i=0; i<array.length; i++){
      nums[array[i]] = true
    }
    for(let i=0; i<array.length; i++){
      if(!nums[array[i]]){
        continue
      } else {
        nums[array[i]] = false
        let currentLength = 1
        let left = array[i] - 1
        let right = array[i] + 1
        while(left in nums){
          nums[left] = false
          currentLength++
          left--
        }
        while(right in nums){
          nums[right] = false
          currentLength++
          right++
      }
        if (currentLength > longestLength){
          longestLength = currentLength
          range = [left+1, right-1]
        }
    }
  }
    return range
  }  