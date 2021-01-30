function solve(leapYear, normalYear) {
  leapYear = Number(leapYear);
  normalYear = Number(normalYear);

  for (i = leapYear; i <= normalYear; i += 4) {
    console.log(i);
  }
}
solve("1908", "1919");
