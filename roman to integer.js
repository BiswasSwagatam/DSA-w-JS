const romanToInt = function (s) {
  const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (nums[s[i]] < nums[s[i + 1]]) {
      ans -= nums[s[i]];
    } else {
      ans += nums[s[i]];
    }
  }

  return ans + nums[s[s.length - 1]];
};
