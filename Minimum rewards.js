function minRewards(scores) {
  // const length = scores.length()
  const rewards = new Array(scores.length).fill(1);

  for (let i = 1; i < scores.length; i++) {
    let j = i;
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    } else if (scores[i] < scores[i - 1]) {
      while (scores[j] < scores[j - 1] && j >= 0) {
        rewards[j - 1] = Math.max(rewards[j] + 1, rewards[j - 1]);
        j -= 1;
      }
    }
  }
}

///////////////////////////////////////////

const candy = function (ratings) {
  const rewards = new Array(ratings.length).fill(1);
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1);
    }
  }

  return rewards.reduce((a, b) => a + b);
};
