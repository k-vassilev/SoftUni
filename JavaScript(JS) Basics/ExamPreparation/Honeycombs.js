function solve(bees, flowers) {
  bees = Number(bees);
  flowers = Number(flowers);
  let fill = 0.21;

  let honey = (bees * flowers * fill).toFixed(2);
  let honeyCombs = Math.floor(honey / 100);
  let totalHoney = honeyCombs * 100;
  let honeyLeft = honey - totalHoney;

  console.log(`${honeyCombs} honeycombs filled.`);
  console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
}
solve(11, 120);
