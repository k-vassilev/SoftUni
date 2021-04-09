function solve(input) {
  //let pattern = /\%(?<name>[A-Z][a-z]+)\%\<(?<item>[A-Za-z]+)\>\|(?<qty>\d+)\|(?<price>[\d+\.\d+]+)\$/g;
  let pattern = /[%](?<name>[A-Z][a-z]+)[%]([^\|\$%\.]+)?[<](?<item>\w+)[>]([^\|\$%\.]+)?[|](?<qty>[0-9]+)[|]([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)[$]/g;
  let toMatch = pattern.exec(input);
  let sum = 0;

  while (toMatch !== null) {
    let name = toMatch.groups[`name`];
    let item = toMatch.groups[`item`];
    let qty = toMatch.groups[`qty`];
    let price = toMatch.groups[`price`];
    sum += qty * price;
    console.log(`${name}: ${item} - ${(qty * price).toFixed(2)}`);
    toMatch = pattern.exec(input);
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}
// solve([
//   `%George%<Croissant>|2|10.3$`,
//   `%Peter%<Gum>|1|1.3$`,
//   `%Maria%<Cola>|1|2.4$`,
//   `end of shift`,
// ]);

solve([
  `%InvalidName%<Croissant>|2|10.3$`,
  `%Peter%<Gum>1.3$`,
  `%Maria%<Cola>|1|2.4`,
  `%Valid%<Valid>valid|10|valid20$`,
  `end of shift`,
]);
