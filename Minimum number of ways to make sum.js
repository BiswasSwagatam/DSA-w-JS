function minNumberOfCoinsForChange(n, denoms) {
    const arr = new Array(n+1).fill(Infinity)
    arr[0] = 0
    for(const denom of denoms){
      for(let amount = 0; amount < arr.length; amount++){
        if(denom <= amount){
          arr[amount] = Math.min(arr[amount], arr[amount-denom] + 1)
        }
      }
    }
    return arr[n] !== Infinity ? arr[n] : -1
  }