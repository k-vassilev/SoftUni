function solve(number) {
  let strNum = number.toString();
  let sum = 0;
  for (let index = 0; index < strNum.length; index++) {
    let a = Number(strNum[index]);
    sum += a;
  }
  let strToString = sum.toString();
  if (strToString.includes("9")) {
    console.log(`${number} Amazing? True`);
  } else {
    console.log(`${number} Amazing? False`);
  }
}
solve(1233);
