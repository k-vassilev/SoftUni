function solve(tripPrice, puzzles, dolls, bears, minions, trucks) {
  tripPrice = Number(tripPrice);
  puzzles = Number(puzzles);
  dolls = Number(dolls);
  bears = Number(bears);
  minions = Number(minions);
  trucks = Number(trucks);

  let puzzlesPrice = puzzles * 2.6;
  let dollsPrice = dolls * 3;
  let bearsPrice = bears * 4.1;
  let minionsPrice = minions * 8.2;
  let trucksPrice = trucks * 2;

  let totalSum =
    puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
  let itemsCount = puzzles + dolls + bears + minions + trucks;

  if (itemsCount >= 50) {
    totalSum = 0.75 * totalSum;
  }

  let rent = 0.1 * totalSum;
  totalSum = totalSum - rent;

  if (totalSum >= tripPrice) {
    let sumLeft = (totalSum - tripPrice).toFixed(2);
    console.log(`Yes! ${sumLeft} lv left.`);
  } else if (totalSum < tripPrice) {
    let notLeft = (tripPrice - totalSum).toFixed(2);
    console.log(`Not enough money! ${notLeft} lv needed.`);
  }
}
solve("320", "8", "2", "5", "5", "1");
