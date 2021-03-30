function solve(input) {
  let result = {};
  for (let element of input) {
    let obj = [];
    obj.push(element);
    for (let el of input) {
      if (obj.includes(el)) {
        obj.push(el);
      }
    }

    result[obj[0]] = obj.length - 1;
  }
  let sorted = Object.entries(result);
  sorted.sort((a, b) => b[1] - a[1]);

  for (let key of sorted) {
    console.log(`${key[0]} -> ${key[1]} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
