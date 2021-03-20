function smallestTwoNumbers(arr) {
  let sortAsc = arr.sort((a, b) => a - b);
  let smallest = sortAsc.shift();
  let secondSmallest = sortAsc.shift();
  console.log(`${smallest} ${secondSmallest}`);
}
smallestTwoNumbers([30, 15, 50, 5]);
