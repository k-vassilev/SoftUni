function print(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;

    // return result = arr.filter((el, i) => i%num===0)
    // filters each element based on whether the index is "every num-th"
    // filter always returns an array including all filtered values
}
console.log(print(["5", "20", "31", "4", "20"], 2));
