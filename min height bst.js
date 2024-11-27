function minHeightBst(array) {
  return constructBst(array, 0, array.length - 1);
}

function constructBst(array, startId, endId) {
  if (startId > endId) return null;
  const midId = Math.floor((startId + endId) / 2);
  const bst = new BST(array[midId]);
  bst.left = constructBst(array, startId, midId - 1);
  bst.right = constructBst(array, midId + 1, endId);
  return bst;
}
