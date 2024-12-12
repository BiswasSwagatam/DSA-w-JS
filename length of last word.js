const lengthOfLastWord = function (s) {
  const string = s.trim().split(" ");
  const value = string[string.length - 1];
  return value.length;
};
