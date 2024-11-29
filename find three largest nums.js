function findThreeLargestNumbers(array) {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    let largest = -Infinity;
    let index = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > largest) {
        largest = array[j];
        index = j;
      }
    }
    swap(array, index);
    let newLarge = array.pop();
    arr.push(newLarge);
  }
  return arr.sort((a, b) => a - b);
}

function swap(array, i) {
  let temp = array[i];
  array[i] = array[array.length - 1];
  array[array.length - 1] = temp;
}
