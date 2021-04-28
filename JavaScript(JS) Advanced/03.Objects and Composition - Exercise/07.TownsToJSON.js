function townsTo(input) {
  let firstRow = input.shift().split("|");
  let firstVar = firstRow[1].split(` `);
  let secondVar = firstRow[2].split(` `);
  let thirdVar = firstRow[3].split(` `);
  let town = firstVar[1];
  let latitude = secondVar[1];
  let longitude = thirdVar[1];
  let arr = [];

  for (let line of input) {
    let obj = {
      Town: "",
      Latitude: 0,
      Longitude: 0,
    };
    let row = line.split(`| `);
    let one = row[1].trim();
    let two = row[2].trim();//split(` `);
    let three = row[3].split(` `);
    let townEl = one; //one[1];
    let latitudeEl = Number(two).toFixed(2);
    let longitudeEl = Number(three[0]).toFixed(2).trim();
    obj.Town = townEl;
    obj.Latitude = Number(latitudeEl);
    obj.Longitude = Number(longitudeEl);
    arr.push(obj);
  }
  let result = JSON.stringify(arr);
  return result;
}
// console.log(
//   townsTo([
//     "| Town | Latitude | Longitude |",
//     "| New Sofia | 42.696552 | 23.32601 |",
//     "| Beijing | 39.913818 | 116.363625 |",
//   ])
// );
console.log(
  townsTo([
    "| Town | Latitude | Longitude |",
    "| Delhi |  28.38 | 77.12 |",
    "| Is it a real town? | 71.42 | -13.91 |",
  ])
);
