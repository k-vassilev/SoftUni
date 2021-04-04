function solve(input, sentence) {
  let words = input.split(`, `);
  let result = sentence.split(` `);
  let final = [];

  for (let el of result) {
    for (let word of words) {
      let currentLength = word.length;
      let pass = `*`.repeat(currentLength);
      if (el == pass) {
        el = word;
      }
    }

    final.push(el);
  }
  console.log(final.join(` `));
}
solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
