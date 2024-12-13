const containsNearbyDuplicate = function (nums, k) {
  const map = new Set();

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (val in map && i - map[val] <= k) {
      return true;
    }
    map[val] = i;
  }
  return false;

  ///////////////////////////////////////

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (map.has(num)) {
      let id = map.get(num);
      if (i - id <= k) {
        return true;
      }
    }
    map.set(num, i);
  }
  return false;
};
