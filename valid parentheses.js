var isValid = function (s) {
  const stack = [];
  const map = { "(": ")", "{": "}", "[": "]" };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (stack.length === 0) return false;
      if (map[stack.pop()] !== s[i]) return false;
    }
  }
  return stack.length === 0;
};
