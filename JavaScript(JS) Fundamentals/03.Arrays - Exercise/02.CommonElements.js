function solve(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    let element = firstArray[i];
    if (secondArray.includes(element)) {
      console.log(element);
    }
  }
}
solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
