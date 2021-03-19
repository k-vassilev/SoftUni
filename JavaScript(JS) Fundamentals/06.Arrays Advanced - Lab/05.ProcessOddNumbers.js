function processOldNumbers(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % 2 != 0) {
      let element = Number(arr[index]) * 2;
      newArr.push(element);
    }
  }
  console.log(newArr.reverse().join(` `));
}
processOldNumbers([10, 15, 20, 25]);
processOldNumbers([3, 0, 10, 4, 7, 3]);
