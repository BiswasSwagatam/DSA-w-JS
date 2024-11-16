const scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
// [
//                 2, 2, 2, 1, 2, 3, 4, 6, 1
//   ]

function minRewards(scores) {
  // const length = scores.length()
  const rewards = new Array(scores.length).fill(1)
  
  for (let i=1; i< scores.length; i++){
    let j=i
    if (scores[i] > scores[i-1]){
      rewards[i] = rewards[i-1] + 1
    } else if( scores[i] < scores[i-1] ){
      while(scores[j] < scores[j-1] && j >= 0){

        rewards[j-1] = Math.max(rewards[j] +1, rewards[j-1])
        j -= 1
    }
  }

  
}
let reward = 0
for (let i=0; i< rewards.length; i++){
    reward += rewards[i]
}
console.log(rewards)
console.log(reward) 
}
minRewards(scores)

8, 4
5, 1