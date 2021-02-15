function solve(bees, bearHealth, attackBear) {
  bees = Number(bees);
  bearHealth = Number(bearHealth);
  attackBear = Number(attackBear);

  while(bearHealth >= 0){
      bees = bees - attackBear;
      bearHealth = bearHealth - (bees * 5);
  }
  console.log(bees)
}
solve(200, 1000, 10);
