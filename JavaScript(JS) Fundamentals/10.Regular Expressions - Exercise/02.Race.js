function solve(input) {
  let namesLine = input.shift();
  let names = namesLine.split(`, `);
  let pattern = /[A-Za-z]+/g;
  let numericPattern = /[0-9]+/g;
  let allNames = {};

  for (let line of input) {
    if (line === `end of race`) {
      break;
    }

    let currentName = line.match(pattern).join("");
    let currentNum = line.match(numericPattern).join("");
    let currentSum = 0;

    for (let num of currentNum) {
      currentSum += Number(num);
    }

    if (names.includes(currentName)) {
      if (allNames.hasOwnProperty(currentName)) {
        allNames[currentName] += currentSum;
      } else {
        allNames[currentName] = currentSum;
      }
    }
  }
  let sorted = Object.entries(allNames);
  let final = sorted.sort((a, b) => b[1] - a[1]);

  let i = 1;
  for (let line of final) {
    if (i === 1) {
      console.log(`${i}st place: ${line[0]}`);
    } else if (i === 2) {
      console.log(`${i}nd place: ${line[0]}`);
    } else if (i === 3) {
      console.log(`${i}rd place: ${line[0]}`);
    }

    if (i === 3) {
      break;
    }
    i++;
  }
}
solve([
  `George, Peter, Bill, Tom`,
  `G4e@55or%6g6!68e!!@`,
  `R1@!3a$y4456@`,
  `B5@i@#123ll`,
  `G@e54o$r6ge#`,
  `7P%et^#e5346r`,
  `T$o553m&6`,
  `end of race`,
]);
