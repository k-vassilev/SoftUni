function firstAndLastKNumbers(arr) {
  let k = arr[0];
  let firstArr = arr.slice();
  let secondArr = arr.slice();
  let firstElement = firstArr.slice(1, k + 1);
  let lastElement = secondArr.slice(-k);
  console.log(firstElement.join(` `));
  console.log(lastElement.join(` `));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
