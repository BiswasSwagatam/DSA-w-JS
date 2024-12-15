const evalRPN = function (tokens) {
  const stack = [];

  for (const t of tokens) {
    if (t === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (t === "-") {
      let s = stack.pop();
      let f = stack.pop();
      stack.push(f - s);
    } else if (t === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (t === "/") {
      let s = stack.pop();
      let f = stack.pop();
      stack.push(parseInt(f / s));
    } else {
      stack.push(parseInt(t));
    }
  }
  return stack[0];
};
