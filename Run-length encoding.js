function runLengthEncoding(string) {
  const encodedStringCharacters = [];
  let currentRunLength = 1;

  for (let i = 1; i < string.length; i++) {
    let currentChar = string[i];
    let previousChar = string[i - 1];

    if (currentChar !== previousChar || currentRunLength === 9) {
      encodedStringCharacters.push(currentRunLength.toString());
      encodedStringCharacters.push(previousChar);
      currentRunLength = 0;
    }
    currentRunLength++;
  }
  encodedStringCharacters.push(currentRunLength.toString());
  encodedStringCharacters.push(string[string.length - 1]);

  return encodedStringCharacters.join("");
}
