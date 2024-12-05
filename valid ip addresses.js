function validIPAddresses(string) {
  const ipAddressFound = [];

  for (let i = 0; i < Math.min(string.length, 4); i++) {
    const currentParts = ["", "", "", ""];
    currentParts[0] = string.slice(0, i);
    if (!isValid(currentParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currentParts[1] = string.slice(i, j);
      if (!isValid(currentParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currentParts[2] = string.slice(j, k);
        currentParts[3] = string.slice(k);

        if (isValid(currentParts[2]) && isValid(currentParts[3])) {
          ipAddressFound.push(currentParts.join("."));
        }
      }
    }
  }
  return ipAddressFound;
}

function isValid(string) {
  const stringAsInt = parseInt(string);
  if (stringAsInt > 255) return false;
  return stringAsInt.toString().length == string.length;
}
