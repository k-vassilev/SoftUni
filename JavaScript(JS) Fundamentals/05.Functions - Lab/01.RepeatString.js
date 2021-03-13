function repeatString(a, n) {
  let result = ``;

  for (let i = 0; i < n; i++) {
    result += a;
  }
  console.log(result);
}
repeatString("abc", 3);
