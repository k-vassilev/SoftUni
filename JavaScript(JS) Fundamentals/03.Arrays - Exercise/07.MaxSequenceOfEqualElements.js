function solve(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sequence = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        sequence.push(arr[j]);
      } else {
        break;
      }
    }
    if (result.length < sequence.length) {
      result = sequence;
    }
  }
  console.log(result.join(` `));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//solve([1, 1, 1, 2, 3, 1, 3, 3])
//solve([4, 4, 4, 4])
//solve([0, 1, 1, 5, 2, 2, 6, 3, 3])
