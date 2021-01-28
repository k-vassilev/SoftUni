function solve(city, sales) {
  sales = Number(sales);
  let price = 0;

  switch (city) {
    case `Sofia`:
      if (sales >= 0 && sales <= 500) {
        price = 0.05 * sales;
      } else if (sales > 500 && sales <= 1000) {
        price = 0.07 * sales;
      } else if (sales > 1000 && sales <= 10000) {
        price = 0.08 * sales;
      } else if (sales > 10000) {
        price = 0.12 * sales;
      }
      break;
    case `Varna`:
      if (sales >= 0 && sales <= 500) {
        price = 0.045 * sales;
      } else if (sales > 500 && sales <= 1000) {
        price = 0.075 * sales;
      } else if (sales > 1000 && sales <= 10000) {
        price = 0.1 * sales;
      } else if (sales > 10000) {
        price = 0.13 * sales;
      }
      break;
    case `Plovdiv`:
      if (sales >= 0 && sales <= 500) {
        price = 0.055 * sales;
      } else if (sales > 500 && sales <= 1000) {
        price = 0.08 * sales;
      } else if (sales > 1000 && sales <= 10000) {
        price = 0.12 * sales;
      } else if (sales > 10000) {
        price = 0.145 * sales;
      }
      break;
  }
  if (
    (sales >= 0 && city === `Plovdiv`) ||
    city === `Varna` ||
    city === `Sofia`
  ) {
    console.log(price.toFixed(2));
  } else {
    console.log(`error`);
  }
}
solve("Bourgas", "1500");
