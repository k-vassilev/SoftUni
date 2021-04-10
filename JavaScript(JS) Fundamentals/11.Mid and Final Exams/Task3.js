function solve(arr) {
  let pirateShipStatus = arr[0].split(`>`).map(Number);
  let warShipStatus = arr[1].split(`>`).map(Number);
  let maxHealthCapacity = Number(arr[2]);
  let commandsArray = arr.slice(3);
  let breakCheck = true;

  for (let lines of commandsArray) {
    let commandLine = lines.split(` `);
    let command = commandLine[0];
    if (command === `Fire`) {
      let [com, index, damage] = lines.split(` `);
      if (index < warShipStatus.length && index > -1) {
        let target = Number(warShipStatus[index]);
        let newHp = target - Number(damage);
        if (newHp > 0) {
          warShipStatus.splice(index, 1, newHp);
        } else {
          console.log(`You won! The enemy ship has sunken.`);
          breakCheck = false;
          break;
        }
      }
    }
    if (command === `Defend`) {
      let [com, startIndex, endIndex, damage] = lines.split(` `);
      if (startIndex > -1 && endIndex <= pirateShipStatus.length) {
        for (let i = startIndex; i <= endIndex; i++) {
          let target = Number(pirateShipStatus[i]);
          let newHp = target - Number(damage);
          if (newHp > 0) {
            pirateShipStatus.splice(i, 1, newHp);
          } else {
            console.log(`You lost! The pirate ship has sunken.`);
            breakCheck = false;
            break;
          }
        }
      }
    }
    if (command === `Repair`) {
      let [com, index, health] = lines.split(` `);
      if (index > -1 && index < pirateShipStatus.length) {
        let target = Number(pirateShipStatus[index]);
        let newHp = target + Number(health);
        if (newHp <= maxHealthCapacity) {
          pirateShipStatus.splice(index, 1, newHp);
        } else {
          pirateShipStatus.splice(index, 1, maxHealthCapacity);
        }
      }
    }
    if (command === `Status`) {
      let warning = 0.2 * maxHealthCapacity;
      let statCount = 0;
      for (let stat of pirateShipStatus) {
        if (stat < warning) {
          statCount++;
        }
      }
      console.log(`${statCount} sections need repair.`);
    }
    if (command === `Retire`) {
      break;
    }
  }
  let pSum = 0;
  for (let l of pirateShipStatus) {
    pSum += l;
  }
  let wSum = 0;
  for (let lw of warShipStatus) {
    wSum += lw;
  }
  if (breakCheck) {
    console.log(`Pirate ship status: ${pSum}`);
    console.log(`Warship status: ${wSum}`);
  }
}
solve([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
