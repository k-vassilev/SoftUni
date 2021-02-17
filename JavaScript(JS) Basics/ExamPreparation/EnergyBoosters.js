function solve(fruit, size, qty) {
  qty = Number(qty);
  let price = 0;

  if (size === `small`) {
    if (fruit === `Watermelon`) {
      price = 2 * 56.0;
    } else if (fruit === `Mango`) {
      price = 2 * 36.66;
    } else if (fruit === `Pineapple`) {
      price = 2 * 42.1;
    } else if (fruit === `Raspberry`) {
      price = 2 * 20.0;
    }
  } else if (size === `big`) {
    if (fruit === `Watermelon`) {
      price = 5 * 28.7;
    } else if (fruit === `Mango`) {
      price = 5 * 19.6;
    } else if (fruit === `Pineapple`) {
      price = 5 * 24.8;
    } else if (fruit === `Raspberry`) {
      price = 5 * 15.2;
    }
  }
  price = qty * price;

  if (price >= 400 && price <= 1000) {
    price = 0.85 * price;
  } else if (price > 1000) {
    price = 0.5 * price;
  }
  console.log(`${price.toFixed(2)} lv.`);
}
solve("Mango", "big", "8");
