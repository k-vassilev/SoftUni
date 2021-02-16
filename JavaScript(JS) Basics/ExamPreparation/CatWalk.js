function solve(min, walks, calories) {
  min = Number(min);
  walks = Number(walks);
  calories = Number(calories);

  let totalMin = 0;

  totalMin = min * walks;
  let caloriesBurn = 5 * totalMin;

  if (caloriesBurn >= calories / 2) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurn}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurn}.`
    );
  }
}
solve("30", "3", "600");
