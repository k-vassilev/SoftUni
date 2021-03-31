function solve(arr) {
  let words = arr.split(` `);
  let occurences = new Map();

  for (let word of words) {
    word = word.toLowerCase();
    if (!occurences.has(word)) {
      occurences.set(word, 0);
    }
    let value = occurences.get(word) + 1;
    occurences.set(word, value);
  }

  let keys = Array.from(occurences.keys());
  console.log(keys.filter((x) => occurences.get(x) % 2 !== 0).join(` `));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
