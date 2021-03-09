function solve(inputArray) {
  while (inputArray.length > 1) {
    let newArray = [inputArray.length - 1];
    for (let i = 0; i < inputArray.length - 1; i++) {
      newArray[i] = inputArray[i] + inputArray[i + 1];
    }
    inputArray = newArray;
  }
  console.log(inputArray[0]);
}
solve([5, 0, 4, 1, 2]);
