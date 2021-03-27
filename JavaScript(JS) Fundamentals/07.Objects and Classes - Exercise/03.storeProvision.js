function solve(stock, ordered) {
  let shop = {};

  for (let i = 0; i < stock.length; i += 2) {
    // на всеки два индекса (за да се спести %2)
    const element = stock[i];
    shop[element] = Number(stock[i + 1]); // елементът директно  като Key за обекта с value - стойността
  }
  for (let i = 0; i < ordered.length; i += 2) {
    // същото за втория масив
    const element = ordered[i];
    if (!shop.hasOwnProperty(element)) {
      // ако вече не присъства в първия, да се създаде
      shop[element] = 0;
    }
    shop[element] += Number(ordered[i + 1]); // да му се сложи стойност (или да събере)
  }

  Object.keys(shop).forEach((key) => {
    console.log(`${key} -> ${shop[key]}`);
  });
}

solve(
  ["Chips", "5", "CocaCola", "-5", "Bananas", "2.5", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
