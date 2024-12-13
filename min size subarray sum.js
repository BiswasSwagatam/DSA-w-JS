const minSubArrayLen = function (target, nums) {
  let left = 0;
  let currSum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum >= target) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
      }
      currSum -= nums[left];
      left++;
    }
  }

  return minLen !== Infinity ? minLen : 0;
};
