function searchForRange(array, target) {
  let left = Infinity;
  let right = -Infinity;
  let index = 0;
  let isFound = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      isFound = true;
      index = i;
      left = Math.min(index, left);
      right = Math.max(index, right);
    }
  }
  return isFound ? [left, right] : [-1, -1];
}
