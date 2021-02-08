function solve(input) {
  let num = Number(input[0]);
  let startNum = 1;

  while (startNum <= num) {
    console.log(startNum);
    startNum = startNum * 2 + 1;
  }
}
solve(["17"]);
