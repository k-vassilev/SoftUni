function solve(num) {
  num = Number(num);

  for (i = 1; i <= 10; i++) {
    let result = i * num;
    console.log(`${i} * ${num} = ${result}`);
  }
}
solve("5");
