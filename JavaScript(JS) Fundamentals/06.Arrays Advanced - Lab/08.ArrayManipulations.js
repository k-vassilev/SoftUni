function arrayManipulations(commands) {
  let arrNum = commands[0];
  let splitNum = arrNum.split(` `);

  for (let i = 1; i < commands.length; i++) {
    let arrCommands = commands[i];
    let splitCommands = arrCommands.split(` `);
    for (let index = 0; index < splitCommands.length; index++) {
      const element = splitCommands[index];
      if (element === `Add`) {
        splitNum.push(splitCommands[index + 1]);
      }
      if (element === `Remove`) {
        splitNum = splitNum.filter((n) => {
          return n != splitCommands[index + 1];
        });
      }
      if (element === `RemoveAt`) {
        let removed = splitNum.splice(splitCommands[index + 1], 1);
      }
      if (element === `Insert`) {
        splitNum.splice(splitCommands[index + 2], 0, splitCommands[index + 1]);
      }
    }
  }
  console.log(splitNum.join(` `));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
