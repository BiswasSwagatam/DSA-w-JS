function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    // const num1 = array[i]
    for (let y = i + 1; y < array.length; y++) {
      // const num2 = array[y]
      if (array[i] + array[y] === targetSum) {
        return [array[i], array[y]];
      }
    }
  }
  return [];
}

////////////////////////////////////

//return indices

const twoSum = function (nums, target) {
  const pair = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (target - num in pair) {
      return [i, pair[target - num]];
    }
    pair[num] = i;
  }
};
