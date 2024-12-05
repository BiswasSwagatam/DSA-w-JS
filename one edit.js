function oneEdit(stringOne, stringTwo) {
  const lengthOne = stringOne.length;
  const lengthTwo = stringTwo.length;
  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  let edit = false;
  let idOne = 0;
  let idTwo = 0;
  while (idOne < lengthOne && idTwo < lengthTwo) {
    if (stringOne[idOne] !== stringTwo[idTwo]) {
      if (edit) return false;
      edit = true;

      if (lengthOne > lengthTwo) {
        idOne++;
      } else if (lengthOne < lengthTwo) {
        idTwo++;
      } else {
        idOne++;
        idTwo++;
      }
    } else {
      idOne++;
      idTwo++;
    }
  }
  return true;
}
