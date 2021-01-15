function food(dogs, otherAnimals) {
  let dogfood = Number(dogs) * 2.5;
  let otherAnimalsFood = Number(otherAnimals) * 4;
  let total = dogfood + otherAnimalsFood;

  console.log(total + " lv.");
}
food("13", "9");
