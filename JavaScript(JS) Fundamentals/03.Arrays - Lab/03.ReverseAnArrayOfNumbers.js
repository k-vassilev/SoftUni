function solve(n, arr) {
  let newArr = arr;
  newArr.length = n;
  let a = ``;
  for (let i = newArr.length - 1; i >= 0; i--) {
    a += newArr[i] + ` `;
  }
  console.log(a);
}
solve(3, [10, 20, 30, 40, 50]);
