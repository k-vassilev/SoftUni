function aggrEl(input) {
  let sum = 0;
  for (let el of input) {
    sum += Number(el);
  }
  let inverse = 0;
  for (let el of input) {
    inverse += Number(1 / el);
  }
  console.log(sum);
  console.log(inverse);
  console.log(input.join(``));
}
aggrEl([1, 2, 3]);
