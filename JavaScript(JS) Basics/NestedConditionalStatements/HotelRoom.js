function solve(month, nights) {
  nights = Number(nights);
  let priceStudio = 0;
  let priceApartment = 0;

  switch (month) {
    case `May`:
    case `October`:
      priceStudio = 50;
      priceApartment = 65;
      if (nights > 7 && nights <= 14) {
        priceStudio = 0.95 * priceStudio;
      } else if (nights > 14) {
        priceStudio = 0.7 * priceStudio;
        priceApartment = 0.9 * priceApartment;
      }
      break;
    case `June`:
    case `September`:
      priceStudio = 75.2;
      priceApartment = 68.7;
      if (nights > 14) {
        priceStudio = 0.8 * priceStudio;
        priceApartment = 0.9 * priceApartment;
      }
      break;
    case `July`:
    case `August`:
      priceStudio = 76;
      priceApartment = 77;
      if (nights > 14) {
        priceApartment = 0.9 * priceApartment;
      }
      break;
  }
  priceStudio = priceStudio * nights;
  priceApartment = priceApartment * nights;
  console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
solve("June", "14");
