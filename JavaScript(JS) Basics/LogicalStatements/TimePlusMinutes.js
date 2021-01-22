function solve(hours, mins) {
  hours = Number(hours);
  mins = Number(mins);

  let newVar = hours * 60 + mins + 15;

  let newHour = Math.floor(newVar / 60).toFixed(0); // math.floor при 0-ва стойност на променливата на часовете
  let newMin = (newVar % 60).toFixed(0);

  if (newMin < 10 && newHour < 24) {
    console.log(`${newHour}:0${newMin}`);
  } else if (newMin < 10 && newHour >= 24) {
    newHour = newHour - 24;
    console.log(`${newHour}:0${newMin}`);
  } else if (newHour >= 24) {
    newHour = newHour - 24;
    console.log(`${newHour}:${newMin}`);
  } else {
    console.log(`${newHour}:${newMin}`);
  }
}
solve("0", "44");
