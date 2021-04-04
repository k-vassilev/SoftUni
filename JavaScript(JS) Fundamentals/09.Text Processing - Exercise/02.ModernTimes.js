function solve(input) {
  let result = input.replace(/[^A-Za-z#\s]/g, "");
  let words = result.split(` `);

  for (let word of words) {
    if (word.startsWith(`#`) && word.length > 1) {
      console.log(word.substring(1, word.length + 1));
    }
  }
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia ?");
