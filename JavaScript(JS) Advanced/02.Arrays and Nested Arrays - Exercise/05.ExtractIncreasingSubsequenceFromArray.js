function extract(arr) {
  let biggest = Number.MIN_SAFE_INTEGER;
  let result = [];
  for (let el of arr) {
    if (biggest <= el) {
      biggest = el;
      result.push(el);
    }
  }
  return result;
}
console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
