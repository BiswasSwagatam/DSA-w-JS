function commonCharacters(strings) {
  const charCounts = {};
  for (const string of strings) {
    const uniqueCharacters = new Set(string);
    for (const char of uniqueCharacters) {
      if (!(char in charCounts)) {
        charCounts[char] = 0;
      }
      charCounts[char]++;
    }
  }
  const finalChars = [];
  for (const [chars, length] of Object.entries(charCounts)) {
    if (length === strings.length) {
      finalChars.push(chars);
    }
  }
  return finalChars;
}
