function solve(input) {
  let index = 0;
  let cakesCount = Number(input[index++]);
  let highestCheffPoint = ``;
  let highestPoints = Number.MIN_SAFE_INTEGER;

  while (cakesCount > 0) {
    let currentBakerName = input[index++];
    let currentBakerPoits = 0;

    let inputLine = input[index++];
    while (inputLine !== `Stop`) {
      currentBakerPoits += Number(inputLine);
      inputLine = input[index++];
    }

    console.log(`${currentBakerName} has ${currentBakerPoits} points.`);
    if (currentBakerPoits > highestPoints) {
      highestPoints = currentBakerPoits;
      highestCheffPoint = currentBakerName;
      console.log(`${currentBakerName} is the new number 1!`);
    }
    cakesCount--;
  }
  console.log(
    `${highestCheffPoint} won competition with ${highestPoints} points!`
  );
}

solve([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
