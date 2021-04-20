function biggestElement(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let m = input[i];
    result = result.concat(m);
  }
  let max = result.reduce((acc, c) => Math.max(acc, c));

  return max;
}
console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
