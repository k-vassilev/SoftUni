function solve(arr) {
  let originalSum = 0;
  let newSum = 0;
  let modifiedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    originalSum += element;
    if (arr[i] % 2 == 0) {
      element += i;
      newSum += element;
      modifiedArray.push(element);
    } else {
      element -= i;
      newSum += element;
      modifiedArray.push(element);
    }
  }
  console.log(modifiedArray);
  console.log(originalSum);
  console.log(newSum);
}
// solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
