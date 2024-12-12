function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[left] !== string[right]) return false;
    left++;
    right--;
  }
  return true;
}

/////////////////////////////////

const isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};
