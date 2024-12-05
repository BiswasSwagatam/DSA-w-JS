function minimumCharactersForWords(words) {
  const charsNeeded = {};
  for (const word of words) {
    const charFrequencies = countCharFrequencies(word);
    updateCharsNeeded(charFrequencies, charsNeeded);
  }

  return arrayFromCharsNeeded(charsNeeded);
}

function countCharFrequencies(word) {
  const frequencies = {};
  for (const char of word) {
    if (!(char in frequencies)) {
      frequencies[char] = 0;
    }
    frequencies[char]++;
  }
  return frequencies;
}

function updateCharsNeeded(frequencies, maxFrequencies) {
  for (const char in frequencies) {
    let frequency = frequencies[char];

    if (char in maxFrequencies) {
      maxFrequencies[char] = Math.max(frequency, maxFrequencies[char]);
    } else {
      maxFrequencies[char] = frequency;
    }
  }
}

function arrayFromCharsNeeded(charFrequencies) {
  const characters = [];
  for (const char in charFrequencies) {
    let frequency = charFrequencies[char];

    for (let i = 0; i < frequency; i++) {
      characters.push(char);
    }
  }
  return characters;
}
