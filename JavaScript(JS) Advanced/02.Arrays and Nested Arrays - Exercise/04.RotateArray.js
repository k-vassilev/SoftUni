function rotateArray(arr, n) {
  for (let i = 0; i < n; i++) {
    let start = arr[arr.length - 1];
    arr.pop();
    arr.unshift(start);
  }
  return arr.join(` `);

// ---- REDUCE SOLUTION ----
// return arr.reduce(function(result,currentValue,index,initialArr) {
// if (currentValue >= result [result.length-1]) {
// result.push(currentValue)
// }
//return result;
//}, [])

// >>> result - accumulator, which takes initial value of empty array []
// >>> currentValue - each value in the array (as in a loop)
// >>> index is current index and initialARR is the arr itself
// if-statement checks if the currentValue is larger or equal to the last one in the array


}
console.log(rotateArray(["1", "2", "3", "4"], 2));
