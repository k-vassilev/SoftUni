function solve(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let counter = 0;
  let flag = false;
  let i = 0;
  let j = 0;

  for (i = a; i <= b; i++) {
    for (j = a; j <= b; j++) {
      counter++;
      if (i + j === c) {
        flag = true;
        console.log(`Combination N:${counter} (${i} + ${j} = ${c})`);
        if (flag === true) {
          break;
        }
      }
    }
    if (flag === true) {
      break;
    }
  }
  if (flag === false) {
    console.log(`${counter} combinations - neither equals ${c}`);
  }
}
solve(["50", "100", "150"]);
