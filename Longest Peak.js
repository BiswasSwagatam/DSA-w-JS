function longestPeak(array) {
    let longestPeak = 0
    let i = 1
    while(i < (array.length - 1)) {
      let isPeak = ((array[i-1] < array[i]) && (array[i] > array[i+1]))
      if(!isPeak){
        i += 1
        continue
      }
      leftId = i-2
      while((leftId>=0) && (array[leftId]<array[leftId + 1])) {
        leftId -= 1
      }
      rightId = i+2
      while((rightId<array.length) && (array[rightId]<array[rightId - 1])) {
        rightId += 1
      }
      let currentPeakLength = rightId - leftId - 1
      longestPeak = Math.max(longestPeak, currentPeakLength)
      i=rightId
    }
    return longestPeak
  }
  
 