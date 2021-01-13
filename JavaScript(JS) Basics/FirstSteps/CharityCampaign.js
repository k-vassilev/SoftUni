function charity(days, cheffs, cakes, gofreti, pancakes) {
  let cakePrice = cakes * 45;
  let gofretiPrice = gofreti * 5.8;
  let pancakesPrice = pancakes * 3.2;

  let pricePerDay =
    (Number(cakePrice) + Number(gofretiPrice) + Number(pancakesPrice)) *
    Number(cheffs);
  let total = Number(pricePerDay) * Number(days);
  let final = Number(total) - (1 / 8) * Number(total);

  console.log(final);
}

charity("131", "5", "9", "33", "46");
