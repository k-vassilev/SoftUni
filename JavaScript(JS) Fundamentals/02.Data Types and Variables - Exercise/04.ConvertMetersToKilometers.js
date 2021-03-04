function solve(meters) {
  meters = Number(meters);
  let kilometers = (meters / 1000).toFixed(2);
  console.log(kilometers);
}
solve(1852);
solve(789);
