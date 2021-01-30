function solve(input) {
  let n = Number(input[0]);
  let min = Number.MAX_SAFE_INTEGER; //максминалното възмоно число

  for (i = 1; i < input.length; i++) {
    let number = Number(input[i]);
    if (number < min) {
      min = number;
    }
  }

  console.log(min);
}
solve(["4", "45", "-20", "7", "99"]);
