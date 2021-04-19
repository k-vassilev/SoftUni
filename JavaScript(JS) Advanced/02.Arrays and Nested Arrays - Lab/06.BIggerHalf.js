function biggerHalf(input) {
  let result = [];
  input.sort(function (a, b) {
    return a - b;
  });
  let start = Math.floor(input.length / 2);
  for (let i = start; i < input.length; i++) {
    result.push(input[i]);
  }
  return result;
}
//console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

