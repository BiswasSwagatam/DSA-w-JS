function minNumberOfJumps(array) {
  const jumps = new Array(array.length).fill(Infinity);
  jumps[0] = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] + j >= i) {
        jumps[i] = Math.min(jumps[i], 1 + jumps[j]);
      }
    }
  }
  return jumps[jumps.length - 1];
}

//////////////////////////////////////////

if (nums.length === 1) return 0;
let jumps = 0;
let maxReach = nums[0];
let steps = nums[0];
for (let i = 1; i < nums.length - 1; i++) {
  maxReach = Math.max(maxReach, i + nums[i]);
  steps--;
  if (steps === 0) {
    jumps++;
    steps = maxReach - i;
  }
}
return jumps + 1;
