function larNum(a, b, c) {
  let arr = [];
  arr.push(Number(a));
  arr.push(Number(b));
  arr.push(Number(c));
  let biggest = Math.max(...arr);

  console.log(`The largest number is ${biggest}.`);
}
larNum(5, -3, 16);
