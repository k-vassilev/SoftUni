function solve(n) {
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let strNum = i.toString();
    for (let l = 0; l < strNum.length; l++) {
      let a = Number(strNum[l]);
      sum += a;
    }
    if (sum % 5 == 0 || sum % 7 == 0 || sum % 11 == 0) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
  if (n == 0) {
    console.log(`0 -> False`);
  } else if (n < 0) {
    for (let i = n; i < 0; i++) {
      let sum = 0;
      let strNum = i.toString();
      for (let l = 0; l < strNum.length; l++) {
        let a = Number(strNum[l]);
        sum += a;
      }
      if (sum % 5 == 0 || sum % 7 == 0 || sum % 11 == 0) {
        console.log(`${i} -> True`);
      } else {
        console.log(`${i} -> False`);
      }
    }
  }
}
solve(15);
