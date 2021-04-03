function solve(input, word) {
  let pass = `*`.repeat(word.length);
  let result = input.split(word).join(pass);
  console.log(result);
}
solve("A small sentence with some words", "small");
