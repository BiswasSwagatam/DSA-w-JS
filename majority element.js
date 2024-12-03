function majorityElement(array) {
  let count = 0;
  let answer = null;

  for (const value of array) {
    if (count === 0) answer = value;
    if (value === answer) {
      count++;
    } else {
      count--;
    }
  }
  return answer;
}
