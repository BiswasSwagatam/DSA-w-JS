const isIsomorphic = function (s, t) {
  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in mapS)) {
      mapS[s[i]] = i;
    }

    if (!(t[i] in mapT)) {
      mapT[t[i]] = i;
    }

    if (mapS[s[i]] !== mapT[t[i]]) {
      return false;
    }
  }
  return true;
};
