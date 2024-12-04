function semordnilap(words) {
  const allWords = new Set(words);
  const pairs = [];
  for (const word of words) {
    let reverse = word.split("").reverse().join("");
    if (allWords.has(reverse) && reverse != word) {
      pairs.push([word, reverse]);
      allWords.delete(word);
      allWords.delete(reverse);
    }
  }
  return pairs;
}
