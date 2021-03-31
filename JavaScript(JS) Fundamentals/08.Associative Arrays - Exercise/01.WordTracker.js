function solve(arr) {
  let words = arr.shift().split(` `);
  let wordsObj = {};
  for (let word of words) {
    wordsObj[word] = 0;
  }
  for (let word of arr) {
    if (wordsObj.hasOwnProperty(word)) {
      wordsObj[word]++;
    }
  }
  let wordsArr = Object.entries(wordsObj);
  let sorted = wordsArr.sort((a, b) => b[1] - a[1]);

  for (let element of sorted) {
    console.log(`${element[0]} - ${element[1]}`);
  }
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
  "sentence",
  "sentence",
]);
