function firstNonRepeatingCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] == currentChar) {
        count++;
      }
    }
    if (count == 1) {
      return i;
    }
  }

  return -1;
}

/////////////////////////////////////////////

function firstNonRepeatingCharacter(string) {
  const counts = {};

  for (const char of string) {
    if (!(char in counts)) {
      counts[char] = 0;
    }
    counts[char]++;
  }

  for (let i = 0; i < string.length; i++) {
    let curr = string[i];
    if (counts[curr] == 1) {
      return i;
    }
  }
  return -1;
}
