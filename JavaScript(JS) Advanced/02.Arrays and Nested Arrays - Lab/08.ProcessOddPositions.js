function processOddPositions(input) {
  let nums = [];
  for (let i = 0; i < input.length; i++) {
    if (i % 2 !== 0) {
      nums.push(input[i]);
    }
  }
  let result = nums.map((x) => (x = 2 * x));
  result.reverse();
  return result.join(` `);
}
console.log(processOddPositions([10, 15, 20, 25]));
