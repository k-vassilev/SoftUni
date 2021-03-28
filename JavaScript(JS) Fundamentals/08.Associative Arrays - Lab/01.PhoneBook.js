function solve(input) {
  let assocArr = {};
  for (let line of input) {
    let [name, phone] = line.split(` `);
    assocArr[name] = phone;
  }
  for (let key in assocArr) {
    console.log(`${key} -> ${assocArr[key]}`);
  }
}
solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
