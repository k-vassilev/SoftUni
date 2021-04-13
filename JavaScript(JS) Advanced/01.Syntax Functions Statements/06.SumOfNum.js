function sumOfNum(n, m) {
  n = Number(n);
  m = Number(m);
  let sum = 0;

  for (let i = n; i <= m; i++) {
    sum += i;
  }
  console.log(sum);
}
sumOfNum("1", "5");
sumOfNum("-8", "20");
