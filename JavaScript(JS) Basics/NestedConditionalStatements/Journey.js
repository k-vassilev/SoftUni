function solve(budget, season) {
  budget = Number(budget);
  let where;
  let price = 0;
  let destination;

  if (season === `summer`) {
    where = `Camp`;
  } else if (season === `winter`) {
    where = `Hotel`;
  }

  if (budget <= 100) {
    destination = `Bulgaria`;
    if (season === `summer`) {
      price = 0.3 * budget;
    } else if (season === `winter`) {
      price = 0.7 * budget;
    }
  }
  if (budget > 100 && budget <= 1000) {
    destination = `Balkans`;
    if (season === `summer`) {
      price = 0.4 * budget;
    } else if (season === `winter`) {
      price = 0.8 * budget;
    }
  }
  if (budget > 1000) {
    destination = `Europe`;
    where = `Hotel`;
    if (season === `summer`) {
      price = 0.9 * budget;
    } else if (season === `winter`) {
      price = 0.9 * budget;
    }
  }
  price = price.toFixed(2);
  console.log(`Somewhere in ${destination}`);
  console.log(`${where} - ${price}`);
}
solve("1500", "summer");
