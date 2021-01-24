function solve(budget, season, fishermans) {
  budget = Number(budget);
  fishermans = Number(fishermans);
  let price = 0;

  switch (season) {
    case `Spring`:
      price = 3000;
      if (fishermans <= 6) {
        price = 0.9 * price;
      } else if (fishermans > 6 && fishermans <= 11) {
        price = 0.85 * price;
      } else if (fishermans >= 12) {
        price = 0.75 * price;
      }
      if (fishermans % 2 == 0) {
        price = 0.95 * price;
      }
      break;
    case `Summer`:
      price = 4200;
      if (fishermans <= 6) {
        price = 0.9 * price;
      } else if (fishermans > 6 && fishermans <= 11) {
        price = 0.85 * price;
      } else if (fishermans >= 12) {
        price = 0.75 * price;
      }
      if (fishermans % 2 == 0) {
        price = 0.95 * price;
      }
      break;
    case `Autumn`:
      price = 4200;
      if (fishermans <= 6) {
        price = 0.9 * price;
      } else if (fishermans > 6 && fishermans <= 11) {
        price = 0.85 * price;
      } else if (fishermans >= 12) {
        price = 0.75 * price;
      }
      break;
    case `Winter`:
      price = 2600;
      if (fishermans <= 6) {
        price = 0.9 * price;
      } else if (fishermans > 6 && fishermans <= 11) {
        price = 0.85 * price;
      } else if (fishermans >= 12) {
        price = 0.75 * price;
      }
      if (fishermans % 2 == 0) {
        price = 0.95 * price;
      }
      break;
  }
  if (budget - price >= 0) {
    let moneyLeft = (budget - price).toFixed(2);
    console.log(`Yes! You have ${moneyLeft} leva left.`);
  } else {
    let moneyLeft = (price - budget).toFixed(2);
    console.log(`Not enough money! You need ${moneyLeft} leva.`);
  }
}
solve("3600", "Autumn", "6");
