function solve(n) {
  let sum = 0;

  for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log(`Sum: ${sum}`);
}
solve(10);
