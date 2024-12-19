const searchRange = function (nums, target) {
  function search(nums, target, isSearchingLeft) {
    let left = 0;
    let right = nums.length - 1;
    let id = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        id = mid;
        if (isSearchingLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return id;
  }

  const left = search(nums, target, true);
  const right = search(nums, target, false);

  return [left, right];
};
