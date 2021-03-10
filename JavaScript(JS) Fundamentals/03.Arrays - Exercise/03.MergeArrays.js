function solve(firstArray, secondArray) {
  let thirdArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    let element = firstArray[i];
    if (i % 2 == 0) {
      let evenSum = Number(firstArray[i]) + Number(secondArray[i]);
      thirdArray.push(evenSum);
    } else {
      let oddConcat = element.concat(secondArray[i]);
      thirdArray.push(oddConcat);
    }
  }
  console.log(thirdArray.join(` - `));
}
solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
