function fibonaci(n) {
  let a = 0;
  let b = 1;
  let seq = [];

  for (let i = 0; i < n; i++) {
    let c = a + b;
    let d = b + c;
    seq.push(c);
    seq.push(d);
    console.log(d);
    a = seq[i];
    b = seq[i + 1];
  }
}
fibonaci(4);
