function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutOfOrder(num, i, array)) {
      minOutOfOrder = Math.min(num, minOutOfOrder);
      maxOutOfOrder = Math.max(num, maxOutOfOrder);
    }
  }
  if (minOutOfOrder == Infinity) {
    return [-1, -1];
  }
  let left = 0;
  while (minOutOfOrder >= array[left]) {
    left++;
  }
  let right = array.length - 1;
  while (maxOutOfOrder <= array[right]) {
    right--;
  }
  return [left, right];
}

function isOutOfOrder(num, i, array) {
  if (i == 0) {
    return num > array[i + 1];
  } else if (i == array.length - 1) {
    return num < array[i - 1];
  } else {
    return num > array[i + 1] || num < array[i - 1];
  }
}
