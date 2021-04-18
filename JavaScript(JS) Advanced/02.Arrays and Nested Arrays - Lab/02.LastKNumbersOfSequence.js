function lastKNum(n, k) {
  let result = [];
  result[0] = 1;

  for (let i = 1; i < n; i++) {
    let el = result.slice(-k);
    let sum = el.reduce((acc, c) => acc + c, 0);
    result.push(sum);
  }
  return result;
}
console.log(lastKNum(6, 3));
