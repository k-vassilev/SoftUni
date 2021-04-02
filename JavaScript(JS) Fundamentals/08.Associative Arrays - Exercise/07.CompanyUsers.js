function solve(arr) {
  let result = {};
  for (let line of arr) {
    let [company, id] = line.split(` -> `);
    if (!result.hasOwnProperty(company)) {
      result[company] = [];
    }
    if (!result[company].includes(id)) {
      result[company].push(id);
    }
  }

  let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

  for (let line of sorted) {
    console.log(`${line[0]}`);
    for (let el of line[1]) {
      console.log(`-- ${el}`);
    }
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
