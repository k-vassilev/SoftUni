function solve(arr) {
  let parking = {};
  for (let element of arr) {
    let line = element.split(`, `);
    let [command, plateNumber] = line;
    if (command == `IN`) {
      parking[plateNumber] = 1;
    } else {
      delete parking[plateNumber];
    }
  }
  let plateArr = Object.keys(parking);
  plateArr.sort((a, b) => a.localeCompare(b));
  if (plateArr.length > 0) {
    for (let el of plateArr) {
      console.log(el);
    }
  } else {
    console.log(`Parking Lot is Empty`);
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
