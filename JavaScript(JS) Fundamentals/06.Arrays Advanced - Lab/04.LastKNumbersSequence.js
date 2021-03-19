function sumLastKNumbersSequence(n, k) {
  let result = [1];
  for (let current = 1; current < n; current++) {
    let lastK = result.slice(-k);
    let sum = 0;
    for (let num of lastK) {
      sum += num;
    }
    result.push(sum);
  }
  console.log(result.join(` `));
}
sumLastKNumbersSequence(6, 3);
