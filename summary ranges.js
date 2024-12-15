const summaryRanges = function (nums) {
  const output = [];
  let id = 0;
  while (id < nums.length) {
    let left = nums[id];
    let right;
    while (id + 1 < nums.length && nums[id + 1] === nums[id] + 1) {
      id++;
    }
    right = nums[id];
    if (left === right) {
      output.push(left + "");
    } else {
      output.push(left + "->" + right);
    }
    id++;
  }
  return output;
};
