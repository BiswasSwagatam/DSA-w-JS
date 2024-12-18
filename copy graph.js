const cloneGraph = function (node) {
  let oldToNew = new Map();

  if (!node) return null;

  return dfs(node);

  function dfs(node) {
    if (oldToNew.has(node)) {
      return oldToNew.get(node);
    }

    let copy = new _Node(node.val);
    oldToNew.set(node, copy);

    for (let n of node.neighbors) {
      copy.neighbors.push(dfs(n));
    }
    return copy;
  }
};
