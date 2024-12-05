function reverseWordsInString(string) {
  const words = [];
  let startId = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === " ") {
      words.push(string.slice(startId, i));
      startId = i;
    } else if (string[startId] === " ") {
      words.push(" ");
      startId = i;
    }
  }
  words.push(string.slice(startId));

  reverseList(words);
  return words.join("");
}

function reverseList(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}
