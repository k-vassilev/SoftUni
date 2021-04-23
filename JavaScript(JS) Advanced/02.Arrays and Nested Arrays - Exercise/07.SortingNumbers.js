function sortingNumbers(input) {
  let result = [];
  let length = input.length;
  for (let i = 0; i < length / 2; i++) {
    input = input.sort((a, b) => a - b);
    let toMin = input.shift();
    result.push(toMin);
    input = input.sort((a, b) => b - a);
    let toMax = input.shift();
    result.push(toMax);
  }
  return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
