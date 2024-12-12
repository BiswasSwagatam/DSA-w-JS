const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let width = 0;
  let height1 = 0;
  let maxArea = 0;

  while (left < right) {
    width = right - left;
    height1 = Math.min(height[left], height[right]);
    let currentArea = width * height1;
    maxArea = Math.max(maxArea, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
