function diagonalSums(input) {
  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  for (let i = 0; i < input.length; i++) {
    let diagonal = input[i];
    let first = diagonal[i];
    firstDiagonalSum += first;
  }

  for (let i = input.length - 1; i >= 0; i--) {
    let diagonal = input[i];
    let last = diagonal[input[0].length - i - 1];
    secondDiagonalSum += last;
  }
  console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);
}
diagonalSums([
  [20, 40],
  [10, 60],
]);
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
