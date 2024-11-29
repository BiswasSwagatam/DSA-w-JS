function powerset(array) {
  const set = [[]];
  for (let i = 0; i < array.length; i++) {
    const len = set.length;
    for (let j = 0; j < len; j++) {
      set.push(set[j].concat(array[i]));
    }
  }
  return set;
}
