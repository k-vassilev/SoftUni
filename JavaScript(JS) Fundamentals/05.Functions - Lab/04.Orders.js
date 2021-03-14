function orders(product, quantity) {
  let coffeePrice = 1.5;
  let waterPrice = 1;
  let cokePrice = 1.4;
  let snacksPrice = 2.0;

  if (product == `coffee`) {
    let result = coffeePrice * quantity;
    console.log(result.toFixed(2));
  }
  if (product == `water`) {
    let result = waterPrice * quantity;
    console.log(result.toFixed(2));
  }
  if (product == `coke`) {
    console.log((cokePrice * quantity).toFixed(2));
  }
  if (product == `snacks`) {
    console.log((snacksPrice * quantity).toFixed(2));
  }
}
orders("water", 5);
