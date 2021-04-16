function cookingByNumbers(num, op1, op2, op3, op4, op5) {
  num = Number(num);
  let arr = [];
  arr.push(op1);
  arr.push(op2);
  arr.push(op3);
  arr.push(op4);
  arr.push(op5);
  for (let command of arr) {
    if (command === `chop`) {
      num /= 2;
    } else if (command === `dice`) {
      num = Math.sqrt(num);
    } else if (command === `spice`) {
      num += 1;
    } else if (command === `bake`) {
      num *= 3;
    } else if (command === `fillet`) {
      num -= 0.2 * num;
    }
    console.log(num);
  }
}
//cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
