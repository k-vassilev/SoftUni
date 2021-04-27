function heroicInventory(input) {
  let result = [];
  for (let line of input) {
    let [name, level, item] = line.split(` / `);
    level = Number(level);
    let items = item ? item.split(", ") : [];
    let obj = {
      name,
      level,
      items,
    };

    result.push(obj);
  }
  return JSON.stringify(result);
}
console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
