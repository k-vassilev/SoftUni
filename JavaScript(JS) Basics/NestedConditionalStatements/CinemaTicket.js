function solve(type, r, c) {
  r = Number(r);
  c = Number(c);

  let price = 0;

  switch (type) {
    case `Premiere`:
      price = 12 * r * c;
      break;
    case `Normal`:
      price = 7.5 * r * c;
      break;
    case `Discount`:
      price = 5 * r * c;
      break;
  }
  price = price.toFixed(2);
  console.log(`${price} leva`);
}

solve("Premiere", "10", "12");
