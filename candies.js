const candies = [2,3,5,1,3]
const extraCandies = 3
var kidsWithCandies = function(candies, extraCandies) {
    let initialHighest = 0
    const arr = []
    for (let i=0; i< candies.length; i++){
        if(candies[i]>=initialHighest) {
            initialHighest = candies[i]
        } 
    }

    for (let i=0; i< candies.length; i++){
        if(candies[i]+extraCandies >= initialHighest) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }

    console.log(initialHighest)
    console.log(arr)
};

kidsWithCandies(candies, extraCandies)