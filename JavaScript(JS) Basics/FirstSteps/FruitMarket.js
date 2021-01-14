function solve(
  priceStrawberries,
  BannanaQty,
  OrangesQty,
  RasberryQty,
  StrawberriesQty
) {
  let RasberriesPrice = (1 / 2) * Number(priceStrawberries); //true
  let OrangesPrice = Number(RasberriesPrice) - 0.4 * Number(RasberriesPrice); //true
  let BannanaPrice = Number(RasberriesPrice) - 0.8 * Number(RasberriesPrice);

  let RasberriesSum = Number(RasberriesPrice) * Number(RasberryQty);
  let OrangesSum = Number(OrangesPrice) * Number(OrangesQty);
  let BannanaSum = Number(BannanaPrice) * Number(BannanaQty);
  let StrawberriesSUm = Number(priceStrawberries) * Number(StrawberriesQty);

  let total =
    Number(RasberriesSum) +
    Number(OrangesSum) +
    Number(BannanaSum) +
    Number(StrawberriesSUm);

  console.log(total);
}

solve("48", "10", "3.3", "6.5", "1.7");
