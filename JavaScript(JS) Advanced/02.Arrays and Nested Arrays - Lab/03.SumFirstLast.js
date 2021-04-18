function sumFirstLast(input) {
  let first = input[0];
  let last = input[input.length - 1];
  let result = Number(first) + Number(last);
  return result;
}
console.log(sumFirstLast(["20", "30", "40"]));
