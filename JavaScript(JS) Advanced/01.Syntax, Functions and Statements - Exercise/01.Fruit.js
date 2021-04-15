function fruitFun(fruit, weight, price) {
  let money = price * weight;
  console.log(
    `I need $${(money / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruitFun("orange", 2500, 1.8);
fruitFun("apple", 1563, 2.35);
