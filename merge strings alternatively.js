const mergeAlternately = function (word1, word2) {
  const w1 = word1.split("");
  const w2 = word2.split("");
  const merged = [];

  for (i = 0; i < Math.min(w1.length, w2.length); i++) {
    merged.push(w1[i], w2[i]);
  }

  if (w1.length > w2.length) {
    merged.push(...w1.slice(w2.length));
  } else {
    merged.push(...w2.slice(w1.length));
  }

  return merged.join("");
};
