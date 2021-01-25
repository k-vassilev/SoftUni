function solve(num) {
  num = Number(num);

  if ((num !== 0 && num < 100) || num > 200) {
    console.log(`invalid`);
  }
}
// с променлива:
// let isInvalid= num==0 && num <100 || num>200
// if (!isInvalid) -> Ако не е вярно (boolean), т.е. ако е Valid;
solve("-20");
