function solve(input) {
  let days = Number(input[0]);
  let totalFood = Number(input[1]);
  let index = 1;
  let commandLine = input[index++];
  let dogFood = 0;
  let catFood = 0;
  let counter = 1;
  let totalEaten = 0;
  let allDog = 0;
  let allCat = 0;
  let biscuits = 0;

  while (counter <= days) {
    dogFood = Number(input[index++]);
    allDog += dogFood;
    catFood = Number(input[index++]);
    allCat += catFood;

    if (counter % 3 == 0) {
      biscuits += 0.1 * (dogFood + catFood);
    }

    counter++;
  }
  let allEatenFood = allCat + allDog;
  let leftFood = (allEatenFood / totalFood) * 100;
  let dogEaten = (allDog / allEatenFood) * 100;
  let catEaten = (allCat / allEatenFood) * 100;

  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(`${leftFood.toFixed(2)}% of the food has been eaten.`);
  console.log(`${dogEaten.toFixed(2)}% eaten from the dog.`);
  console.log(`${catEaten.toFixed(2)}% eaten from the cat.`);
}
solve(["3", "500", "100", "30", "110", "25", "120", "35"]);
