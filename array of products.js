function arrayOfProducts(array) {
  const products = [];
  for (let i = 0; i < array.length; i++) {
    let mul = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        mul *= array[j];
      }
      products[i] = mul;
    }
  }
  return products;
}
