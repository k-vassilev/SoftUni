function solve(input) {
  let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
  let result = pattern.exec(input);
  let final = [];

  while (result !== null) {
    final.push(result[0]);
    result = pattern.exec(input);
  }
  console.log(final.join(`, `));
}
solve([
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222",
]);
