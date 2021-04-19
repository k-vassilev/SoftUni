function pieceOfPie(arr, first, second) {
  let result = [];
  for (let i = arr.indexOf(first); i <= arr.indexOf(second); i++) {
    result.push(arr[i]);
  }
  return result;
}
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
