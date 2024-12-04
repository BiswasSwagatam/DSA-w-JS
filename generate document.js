function generateDocument(characters, document) {
  const numChars = {};
  for (const char of characters) {
    if (!(char in numChars)) {
      numChars[char] = 0;
    }
    numChars[char]++;
  }

  for (const c of document) {
    if (!(c in numChars) || numChars[c] <= 0) {
      return false;
    } else {
      numChars[c]--;
    }
  }
  return true;
}
