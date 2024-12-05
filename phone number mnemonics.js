function phoneNumberMnemonics(phoneNumber) {
  const currentMnemonic = new Array(phoneNumber.length).fill("0");
  const mnemonicsFound = [];

  getMnemonics(0, phoneNumber, currentMnemonic, mnemonicsFound);
  return mnemonicsFound;
}

function getMnemonics(id, phoneNumber, currentMnemonics, mnemonicsFound) {
  if (id == phoneNumber.length) {
    const mnemonic = currentMnemonics.join("");
    mnemonicsFound.push(mnemonic);
  } else {
    const digit = phoneNumber[id];
    const letters = DIGIT_LETTERS[digit];
    for (const letter of letters) {
      currentMnemonics[id] = letter;
      getMnemonics(id + 1, phoneNumber, currentMnemonics, mnemonicsFound);
    }
  }
}

const DIGIT_LETTERS = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
