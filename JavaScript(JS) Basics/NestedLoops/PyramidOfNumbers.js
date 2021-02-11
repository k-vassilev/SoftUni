function solve(input) {
  let n = Number(input[0]);
  let counter = 1;
  let flag = false;

  for (let row = 1; row <= n; row++) {
    let output = "";
    for (let column = 0; column < row; column++) {
      output += counter + ` `;
      if (counter === n) {
        flag = true;
        break;
      }
      counter++;
    }
    console.log(output);
    if (flag) {
      break;
    }
  }
}
solve(["15"]);
