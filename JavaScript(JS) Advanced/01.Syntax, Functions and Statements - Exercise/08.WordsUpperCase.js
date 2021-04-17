function wordsUpperCase(input) {
  let pattern = /\w+/g;
  let arr = input.match(pattern);
  let result = [];
  for (let el of arr) {
    let word = el.toUpperCase();
    result.push(word);
  }
  console.log(result.join(`, `));
}
wordsUpperCase("Hi, how are you?");
wordsUpperCase("hello");
wordsUpperCase(`Functions in JS can be nested, i.e. hold other functions`);
