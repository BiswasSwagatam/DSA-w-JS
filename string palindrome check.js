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
