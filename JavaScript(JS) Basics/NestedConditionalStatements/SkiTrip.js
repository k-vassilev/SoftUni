function solve(days, type, review) {
  days = Number(days);

  let price = 0;
  let nights = days - 1;

  let roomForOnePersonPrice = 18;
  let apartmentPrice = 25;
  let presidentApartmentPrice = 35;

  switch (type) {
    case `room for one person`:
      price = nights * roomForOnePersonPrice;
      if (review === `positive`) {
        price = price * 1.25;
      } else if (review === `negative`) {
        price = price * 0.9;
      }
      break;
    case `apartment`:
      if (nights < 10) {
        price = 0.7 * (nights * apartmentPrice);
        if (review === `positive`) {
          price = price * 1.25;
        } else if (review === `negative`) {
          price = price * 0.9;
        }
      } else if (nights >= 10 && nights <= 15) {
        price = 0.65 * (nights * apartmentPrice);
        if (review === `positive`) {
          price = price * 1.25;
        } else if (review === `negative`) {
          price = price * 0.9;
        }
      } else if (nights > 15) {
        price = 0.5 * (nights * apartmentPrice);
        if (review === `positive`) {
          price = price * 1.25;
        } else if (review === `negative`) {
          price = price * 0.9;
        }
      }
      break;
    case `president apartment`:
      if (nights < 10) {
        price = 0.9 * (nights * presidentApartmentPrice);
        if (review === `positive`) {
          price = price * 1.25;
        } else if (review === `negative`) {
          price = price * 0.9;
        }
      } else if (nights >= 10 && nights <= 15) {
        price = 0.85 * (nights * presidentApartmentPrice);
        if (review === `positive`) {
          price = price * 1.25;
        } else if (review === `negative`) {
          price = price * 0.9;
        }
      } else if (nights > 15) {
        price = 0.8 * (nights * presidentApartmentPrice);
        if (review === `positive`) {
          price = price * 1.25;
        } else if (review === `negative`) {
          price = price * 0.9;
        }
      }
      break;
  }
  console.log(price.toFixed(2));
}
solve("30", "president apartment", "negative");
