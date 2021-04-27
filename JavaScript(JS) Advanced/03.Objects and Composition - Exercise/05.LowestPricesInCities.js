function price(input) {
  let productsList = {};
  for (line of input) {
    let [town, product, price] = line.split(" | ");
    price = Number(price);
    if (!productsList.hasOwnProperty(product)) {
      productsList[product] = {
        town,
        price,
      };
    } else {
      productsList[product] =
        productsList[product].price <= Number(price)
          ? productsList[product]
          : { town, price };
    }
  }
  let result = [];
  for (const product in productsList) {
    result.push(
      `${product} -> ${productsList[product].price} (${productsList[product].town})`
    );
  }
  return result.join("\n");
}
console.log(
  price([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
