function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentId = 0;
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentId == 0) {
      return false;
    }
    numElementsVisited++;
    currentId = getNextId(currentId, array);
  }
  return currentId == 0;
}

function getNextId(id, array) {
  let jump = array[id];
  let nextId = (id + jump) % array.length;
  return nextId >= 0 ? nextId : nextId + array.length;
}
