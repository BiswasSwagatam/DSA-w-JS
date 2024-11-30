var simplifyPath = function (path) {
  const dirs = path.split("/");
  const stack = [];

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "..") {
      stack.pop();
    } else if (dirs[i] !== "." && dirs[i] !== "") {
      stack.push(dirs[i]);
    }
  }
  return "/" + stack.join("/");
};
