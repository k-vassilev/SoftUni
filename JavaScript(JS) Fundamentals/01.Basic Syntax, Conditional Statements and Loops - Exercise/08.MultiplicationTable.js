function solve(a) {
  a = Number(a);

  for (let i = 1; i <= 10; i++) {
    let sum = a * i;
    console.log(`${a} X ${i} = ${sum}`);
  }
}
solve(3);
