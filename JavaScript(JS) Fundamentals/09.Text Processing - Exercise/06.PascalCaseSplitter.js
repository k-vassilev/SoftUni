function solve(input) {
  let result = [];
  for (let char of input) {
    if (char === char.toUpperCase()) {
      result.push(` `);
    }
    result.push(char);
  }

  let final = result.join(``);
  let semi = final.trim();
  let toPrint = semi.split(` `).join(`, `);
  console.log(toPrint);
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
