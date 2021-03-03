function solve(number) {
  let strNum = number.toString();
  let sum = 0;
  for (let index = 0; index < strNum.length; index++) {
    let a = Number(strNum[index]);
    sum += a;
  }
  console.log(sum);
}
solve(245678);
