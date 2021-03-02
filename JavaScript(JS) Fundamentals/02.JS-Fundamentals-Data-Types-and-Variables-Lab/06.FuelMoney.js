function solve(distance, passangers, priceForOneLiter) {
  let neededFuel = (distance / 100) * 7;
  neededFuel += passangers * 0.1;
  let money = neededFuel * priceForOneLiter;
  console.log(`Needed money for that trip is ${money}lv.`);
}
solve(260, 9, 2.49);
