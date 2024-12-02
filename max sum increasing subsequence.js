function maxSumIncreasingSubsequence(array) {
  const sums = array.slice();
  const sequences = new Array(array.length);
  let maxSumId = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    for (let j = 0; j < i; j++) {
      let otherNum = array[j];
      if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
        sums[i] = sums[j] + currentNum;
        sequences[i] = j;
      }
    }
    if (sums[i] >= sums[maxSumId]) {
      maxSumId = i;
    }
  }
  return [sums[maxSumId], buildSequence(array, sequences, maxSumId)];
}

function buildSequence(array, sequences, currentId) {
  const sequence = [];
  while (currentId !== undefined) {
    sequence.unshift(array[currentId]);
    currentId = sequences[currentId];
  }
  return sequence;
}
