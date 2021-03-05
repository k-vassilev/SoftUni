function solve(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armourPrice
) {
  let helmTotal = 0;
  let swordTotal = 0;
  let shieldTotal = 0;
  let armourTotal = 0;
  let shieldCount = 0;
  

  for (let i = lostFightsCount; i > 0; i--) {
    if (i % 2 == 0) {
      helmTotal += helmetPrice;
    }
    if (i % 3 == 0) {
      swordTotal += swordPrice;
    }
    if (i % 2 == 0 && i % 3 == 0) {
      shieldTotal += shieldPrice;
      shieldCount++;
      if (shieldCount % 2 == 0) {
        armourTotal += armourPrice;
      }
    }
  }
  let expenses = helmTotal + swordTotal + shieldTotal + armourTotal;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(23, 12.5, 21.5, 40, 200);
