function solve(a, b) {
  let sum = 0;
  let s = ``;
  for (let i = a; i <= b; i++) {
    s += i + ` `;
    sum += i;
  }
  console.log(s);
  console.log(`Sum: ${sum}`);
}
solve(50, 60);
