function dungeon(arr) {
  let currentHealth = 100;
  let coins = 0;
  let newArr = arr.toString().split(`|`);
  let roomsCounter = 1;
  let isAlive = true;
  for (let i = 0; i < newArr.length; i++) {
    let room = newArr[i];
    let toStr = room.toString();
    let a = toStr.split(` `);
    for (let j = 0; j < a.length; j++) {
      let element = a[j];
      if (element === `potion`) {
        let newHealth = Number(a[j + 1]);
        if (currentHealth + newHealth >= 100) {
          console.log(`You healed for ${100 - currentHealth} hp.`);
        }
        currentHealth += newHealth;
        if (currentHealth >= 100) {
          currentHealth = 100;
          console.log(`Current health: ${Number(currentHealth)} hp.`);
          j++;
        } else {
          console.log(`You healed for ${newHealth} hp.`);
          console.log(`Current health: ${currentHealth} hp.`);
          j++;
        }
      } else if (element === `chest`) {
        coins += Number(a[j + 1]);
        let currentCoinsFound = Number(a[j + 1]);
        console.log(`You found ${currentCoinsFound} coins.`);
        j++;
      } else {
        let monster = a[j];
        currentHealth -= a[j + 1];
        if (currentHealth > 0) {
          console.log(`You slayed ${monster}.`);
        } else if (currentHealth <= 0) {
          console.log(`You died! Killed by ${monster}.`);
          console.log(`Best room: ${roomsCounter}`);
          isAlive = false;
        }
        j++;
      }
      roomsCounter++;
    }
    if (isAlive === false) {
      break;
    }
  }
  if ((i = newArr.length) && isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${currentHealth}`);
  }
}
dungeon(`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`);
//dungeon(`cat 10|potion 30|orc 10|chest 10|snake 25|chest 110`);
