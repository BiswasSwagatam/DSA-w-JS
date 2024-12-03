function missingNumbers(nums) {
  const currentNums = new Set(nums);
  const solution = [];

  for (let i = 1; i < nums.length + 3; i++) {
    if (!currentNums.has(i)) {
      solution.push(i);
    }
  }
  return solution;
}

///////////////////////////////////////

function missingNumbers(nums) {
  const n = nums.length + 2;
  const allNums = new Set([]);
  for (let i = 1; i <= n; i++) {
    allNums.add(i);
  }
  console.log(allNums);

  for (let i = 0; i < nums.length; i++) {
    if (allNums.has(nums[i])) {
      allNums.delete(nums[i]);
    }
  }
  console.log(allNums);

  const arr = [...allNums];
  arr.sort((a, b) => a - b);
  return arr;
}
