function solve(pounds) {
  pounds = Number(pounds);
  let dollars = (pounds * 1.31).toFixed(3);
  console.log(dollars);
}
solve(80);
solve(39);
