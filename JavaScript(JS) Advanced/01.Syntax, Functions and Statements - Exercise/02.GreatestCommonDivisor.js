function GCD(a, b) {
  let arr = [];
  while (b) {
    let t = b;
    b = a % b;
    a = t;
    arr.push(a);
  }
  let result = arr.pop();
  console.log(result);
}
GCD(15, 5);
GCD(2154, 458);
