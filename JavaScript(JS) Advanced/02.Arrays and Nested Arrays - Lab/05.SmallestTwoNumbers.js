function smallestTwoNums(input) {
  let result = [];
  input.sort(function (a, b) {
    return a - b;
  });
  result.push(input[0]);
  result.push(input[1]);
  return result.join(` `);
}
console.log(smallestTwoNums([30, 15, 50, 5]));
