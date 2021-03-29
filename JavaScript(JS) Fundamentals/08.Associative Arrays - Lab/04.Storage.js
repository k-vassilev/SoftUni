function solve(input) {
  let storage = {};
  for (let line of input) {
    let [product, qty] = line.split(` `);
    qty = Number(qty);
    if (storage.hasOwnProperty(product)) {
      storage[product] += qty;
    } else {
      storage[product] = qty;
    }
  }
  for (let key in storage) {
    console.log(`${key} -> ${storage[key]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
