function solve(result, word) {
  result = result.split(` `);
  let count = 0;

  for (let el of result) {
    if (el == word) {
      count++;
    }
  }
  console.log(count);
}
solve("This is a word and it also is a sentence", "is");
