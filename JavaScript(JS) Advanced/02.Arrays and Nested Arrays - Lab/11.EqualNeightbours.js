function equal(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    let m = input[i];
    if (i + 1 == input.length) {
      let f = input[input.length - 1];
      for (let l = 0; l < f.length; l++) {
        let fi = f[l];
        let ne = f[l + 1];
        if (fi === ne) {
          counter++;
        }
      }
      break;
    }
    let n = input[i + 1];

    for (let j = 0; j < m.length; j++) {
      let first = m[j];
      let next = m[j + 1];
      let second = n[j];
      if (first === next) {
        counter++;
      }
      if (first === second) {
        counter++;
      }
    }
  }

  return counter;
}
equal([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
// equal([
//   ["test", "yes", "yo", "ho"],
//   ["well", "done", "yo", "6"],
//   ["not", "done", "yet", "5"],
// ]);
// equal([
//   ["2", "2", "5", "7", "4"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "5", "5", "4", "2"],
// ]);
