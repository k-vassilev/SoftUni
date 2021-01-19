function solve(budget, statists, priceClothesStatist) {
  budget = Number(budget);
  statists = Number(statists);
  priceClothesStatist = Number(priceClothesStatist);

  let decor = 0.1 * budget;
  let sumClothes = statists * priceClothesStatist;

  if (statists > 150) {
    sumClothes = 0.9 * sumClothes;
  }

  let totalPrice = decor + sumClothes;
  let result1 = (budget - totalPrice).toFixed(2);
  let result2 = (totalPrice - budget).toFixed(2);

  if (budget - totalPrice >= 0) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${result1} leva left.`);
  } else if (budget - totalPrice < 0) {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${result2} leva more.`);
  }
}
solve("9587.88", "222", "55.68");
