function negativePositiveNum(input) {
  let result = [];

  for (let el of input) {
    if (el >= 0) {
      result.push(el);
    } else {
      result.unshift(el);
    }
  }
  return result.join(`\n`);
}
console.log(negativePositiveNum([7, -2, 8, 9]));
