function positiveNegative(arr) {
  let resultArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = Number(arr[index]);
    if (element < 0) {
      resultArr.unshift(element);
    } else {
      resultArr.push(element);
    }
  }
  console.log(resultArr.join("\n"));
}
positiveNegative([7, -2, 8, 9]);
