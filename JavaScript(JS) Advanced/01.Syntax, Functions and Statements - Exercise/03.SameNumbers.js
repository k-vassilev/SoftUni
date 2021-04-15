function sameNum(input) {
  let type = typeof input;
  let digits = [];
  let flag = true;
  let sum = 0;
  if (type === `number`) {
    input = String(input);
    for (let char of input) {
      digits.push(char);
    }
    for (let char of digits) {
      if (digits[0] !== char) {
        flag = false;
      }
    }
    for (let num of digits) {
      sum += Number(num);
    }
    console.log(flag);
    console.log(sum);
  }
}
sameNum(2222222);
sameNum(1234);
