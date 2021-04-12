function strLen(a, b, c) {
  let first = a.length;
  let second = b.length;
  let third = c.length;
  let total = first + second + third;
  console.log(total);
  console.log(Math.floor(total / 3));
}
strLen("chocolate", "ice cream", "cake");
