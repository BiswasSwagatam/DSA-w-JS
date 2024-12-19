const increasingTriplet = function (nums) {
  let i = Infinity;
  let j = Infinity;
  for (const k of nums) {
    if (k < i) {
      i = k;
    } else if (k < j && k > i) {
      j = k;
    } else if (k > j && k > i) {
      return true;
    }
  }
  return false;
};
