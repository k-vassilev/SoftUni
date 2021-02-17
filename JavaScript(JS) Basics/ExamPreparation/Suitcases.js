function solve(input) {
  let capacity = Number(input[0]);
  let index = 1;
  let commandLine = input[index++];
  let counter = 0;
  let sum = 0;

  while (commandLine !== `End`) {
    let currentCommand = Number(commandLine);
    sum += currentCommand;
    if (sum >= capacity) {
      console.log(`No more space!`);
      break;
    }
    counter++;

    if (counter === 3) {
      currentCommand = currentCommand * 1.1;
    }

    commandLine = input[index++];
    if (commandLine === `End`) {
      console.log(`Congratulations! All suitcases are loaded!`);
    }
  }
  console.log(`Statistic: ${counter} suitcases loaded.`);
}
solve(["1200.2", "260", "380.5", "125.6", "305", "End"]);
