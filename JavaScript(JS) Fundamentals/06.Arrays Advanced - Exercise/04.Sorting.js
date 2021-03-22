function sorting(arr) {
  let result = [];
  let bigCopy = arr.slice();
  let smallCopy = arr.slice();
  let biggest = bigCopy.sort(function (a, b) {
    return b - a;
  });
  let smallest = smallCopy.sort(function (a, b) {
    return a - b;
  });

  for (let index = 0; index < arr.length; index++) {
    let big = biggest.shift();
    let small = smallest.shift();
    result.push(big);
    result.push(small);
    if (result.length == arr.length) {
      break;
    } else if (result.length > arr.length) {
      result.pop();
      break;
    }
  }
  console.log(result.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 10]);
