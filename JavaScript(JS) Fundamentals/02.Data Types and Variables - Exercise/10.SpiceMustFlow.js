function solve(startingYield) {
  let stored = 0;
  let dailyYield = startingYield;
  let days = 0;
  while (dailyYield >= 100) {
    stored = stored + dailyYield - 26;
    dailyYield -= 10;
    days++;
  }
  if (dailyYield < 100 && stored >= 26) {
    stored = stored - 26;
  }

  console.log(days);
  console.log(stored);
}
solve(300);
