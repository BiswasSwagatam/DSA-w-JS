function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutations, permutations) {
  if (!array.length && currentPermutations.length) {
    permutations.push(currentPermutations);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArr = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutations.concat(array[i]);
      permutationsHelper(newArr, newPermutation, permutations);
    }
  }
}

////////////////////////////////////////////

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, array, permutaitons) {
  if (i == array.length - 1) {
    permutaitons.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(array, i, j);
      permutationsHelper(i + 1, array, permutaitons);
      swap(array, i, j);
    }
  }
}

function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
