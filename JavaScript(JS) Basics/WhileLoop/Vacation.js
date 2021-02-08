function solve(input) {
  let vacationCost = Number(input[0]);
  let moneyAvailable = Number(input[1]);
  let index = 2; // позиция, от която броим
  let spendingCount = 0; // брояч за дните, в които харчи пари
  let daysCount = 0; // изминали дни а.к.а. колко пъти върти цикълът

  while (true) {
    let nextCommandString = input[index++]; // последователно действие
    let nextCommandNumber = Number(input[index++]); // последователна сума

    if (nextCommandString === "spend") {
      moneyAvailable -= nextCommandNumber;
      spendingCount++;
      if (moneyAvailable <= 0) {
        moneyAvailable = 0;
      }
    }
    if (nextCommandString === "save") {
      moneyAvailable += nextCommandNumber;
      spendingCount=0; // за 5 ПОСЛЕДОВАТЕЛНИ т.е. ако има "save" измежду "spend", те се нулират
    }

    daysCount++;

    if (spendingCount === 5) {
      console.log(`You can't save the money.`);
      console.log(daysCount);
      break;
    }
    if (moneyAvailable >= vacationCost) {
      console.log(`You saved the money for ${daysCount} days.`);
      break;
    }
  }
}
