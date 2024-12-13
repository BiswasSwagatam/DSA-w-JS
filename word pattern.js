const wordPattern = function (pattern, s) {
  const kMap = new Map();
  const vMap = new Map();
  const words = s.split(" ");
  let i = 0;

  for (const word of words) {
    if (i === pattern.length) {
      return false;
    }

    const currentChar = pattern[i];
    if (!kMap.has(currentChar) && !vMap.has(word)) {
      kMap.set(currentChar, word);
      vMap.set(word, currentChar);
    } else {
      if (kMap.get(currentChar) !== word || vMap.get(word) !== currentChar) {
        return false;
      }
    }
    ++i;
  }
  return i === pattern.length;
};
