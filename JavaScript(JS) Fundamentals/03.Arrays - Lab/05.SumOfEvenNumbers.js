function solve(arr) {
  sum = 0;
  for (let index = 0; index < arr.length; index++) {
    let element = Number(arr[index]);
    if (element % 2 == 0) {
      sum += element;
    }
  }
  console.log(sum);
}
solve(["1", "2", "3", "4", "5", "6"]);
