function bestDigits(number, numDigits) {
  const stack = [];

  for (const num of number) {
    while (numDigits > 0 && stack.length > 0 && num > stack[stack.length - 1]) {
      stack.pop();
      numDigits--;
    }
    stack.push(num);
  }

  while (numDigits > 0) {
    stack.pop();
    numDigits--;
  }

  return stack.join("");
}
