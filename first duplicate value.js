function firstDuplicateValue(array) {
  let lastSeen = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in lastSeen) {
      return array[i];
    }
    lastSeen[array[i]] = true;
  }
  return -1;
}
