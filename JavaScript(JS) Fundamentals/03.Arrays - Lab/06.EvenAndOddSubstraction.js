function solve(arr) {
  sumOdd = 0;
  sumEven = 0;
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    let element = Number(arr[index]);
    if (element % 2 == 0) {
      sumEven += element;
    } else sumOdd += element;
  }
  result = sumEven - sumOdd;

  console.log(result);
}
solve([1, 2, 3, 4, 5, 6]);
