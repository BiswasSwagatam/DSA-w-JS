function nextGreaterElement(array) {
  const stack = [];
  const results = new Array(array.length).fill(-1);
  for (let i = 0; i < 2 * array.length; i++) {
    let currentId = i % array.length;
    while (
      stack.length != 0 &&
      array[stack[stack.length - 1]] < array[currentId]
    ) {
      let top = stack.pop();
      results[top] = array[currentId];
    }
    stack.push(currentId);
  }

  return results;
}
