function solve(num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  let sum = 0;
  let output = "";

  for (i = num1; i <= num2; i++) {
    if (i % 9 == 0) {
      sum += i;
      output += i + `\n`; //  \n  всяко на нов ред
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(output);
}
solve("100", "200");
