function solve(arr) {
  let tankUnlock = Number(arr[0]);
  let battleCount = Number(arr[1]);
  let experience = arr.slice(2);
  let expGained = 0;
  let count = 1;

  for (let i = 0; i < battleCount; i++) {
    let currentExp = experience[i];
    if (count % 3 == 0 && i % 5 != 0) {
      expGained += 1.15 * currentExp;
    } else if (count % 5 == 0 && i % 3 != 0) {
      expGained += 0.9 * currentExp;
    } else if (count % 15 == 0) {
      expGained += 1.05 * currentExp;
    } else {
      expGained += currentExp;
    }
    if (expGained >= tankUnlock) {
      console.log(
        `Player successfully collected his needed experience for ${count} battles.`
      );
      break;
    }
    count++;
  }
  let neededExperience = tankUnlock - expGained;
  if (expGained < tankUnlock) {
    console.log(
      `Player was not able to collect the needed experience, ${neededExperience.toFixed(2)} more needed.`
    );
  }
}
solve([500, 5, 50, 100, 200, 100, 30]);
solve([500, 5, 50, 100, 200, 100, 20]);
solve([400, 5, 50, 100, 200, 100, 20]);
