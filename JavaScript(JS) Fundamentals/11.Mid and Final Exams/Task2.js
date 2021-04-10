function solve(arr) {
  let initialLoot = arr[0].split(`|`);
  arr.shift();
  for (let element of arr) {
    let commandLine = element.split(` `);
    let command = commandLine[0];
    if (command === `Loot`) {
      commandLine.shift();
      for (let el of commandLine) {
        let isContained = initialLoot.includes(el);
        if (isContained == false) {
          initialLoot.unshift(el);
        }
      }
    }
    if (command === `Drop`) {
      let index = commandLine[1];
      if (index <= initialLoot.length && index >= 0) {
        let temp = initialLoot.splice(index, 1);
        initialLoot.push(temp);
      }
    }
    if (command === `Steal`) {
      let stealIndex = commandLine[1];
      let iniLength = initialLoot.slice();
      let n = iniLength.length;
      let stolenItems = [];
      for (let i = 0; i < stealIndex; i++) {
        if (i <= n) {
          let stolen = initialLoot.pop();
          stolenItems.push(stolen);
        }
      }
      console.log(stolenItems.reverse().join(`, `));
    }
    if (command === `Yohoho!`) {
      break;
    }
  }
  let totalLength = 0;
  for (let countLength of initialLoot) {
    let l = countLength.length;
    totalLength += l;
  }
  let avg = totalLength / initialLoot.length;
  let avgTreasureGain = avg.toFixed(2);
  if (initialLoot.length > 0) {
    console.log(`Average treasure gain: ${avgTreasureGain} pirate credits.`);
  } else {
    console.log(`Failed treasure hunt.`);
  }
}
// solve([
//   "Gold|Silver|Bronze|Medallion|Cup",
//   "Loot Wood Gold Coins",
//   "Loot Silver Pistol",
//   "Drop 3",
//   "Steal 3",
//   "Yohoho!",
// ]);
solve([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
