const isHappy = function (n) {
  const allNums = new Set();

  while (!allNums.has(n)) {
    allNums.add(n);
    n = getNum(n);
    if (n === 1) {
      return true;
    }
  }

  return false;
};

function getNum(n) {
  let output = 0;
  while (n > 0) {
    let digit = n % 10;
    output += digit * digit;
    n = Math.floor(n / 10);
  }

  return output;
}
