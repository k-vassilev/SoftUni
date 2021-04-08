function solve(input) {
  let pattern = /[>]{2}(?<product>[A-Za-z]+)[<]{2}(?<price>[\d+\.\d+]+)!(?<qty>\d+)/g;
  let toMatch = pattern.exec(input);
  let sum = 0;

  console.log(`Bought furniture:`);
  while (toMatch !== null) {
    let product = toMatch.groups[`product`];
    let price = toMatch.groups[`price`];
    let qty = toMatch.groups[`qty`];
    let totalPrice = price * qty;
    sum += totalPrice;
    console.log(`${product}`);
    toMatch = pattern.exec(input);
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
