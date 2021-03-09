function solve(arrOne, arrTwo) {
  let sum = 0;
  let areEqual = true;
  for (let index = 0; index < arrOne.length; index++) {
    let element = Number(arrOne[index]);
    sum += element;
  }
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  if (areEqual == true) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
solve(["10", "20", "30"], ["10", "20", "30"]);
solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
solve(["1"], ["10"]);
