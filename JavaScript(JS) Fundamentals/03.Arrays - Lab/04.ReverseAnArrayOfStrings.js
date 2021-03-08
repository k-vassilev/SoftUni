function solve(stringArray) {
  let result = "";
  for (let i = stringArray.length - 1; i >= 0; i--) {
    result += stringArray[i];
    result += " ";
  }
  console.log(result);
}
solve(["a", "b", "c", "d", "e"]);
