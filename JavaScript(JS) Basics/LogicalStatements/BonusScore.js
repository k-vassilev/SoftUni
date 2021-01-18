function solve(num) {
  num = Number(num);

  let bonus = 0.0; // стойност с натрупване

  if (num <= 100) {
    bonus = 5;
  } else if (num > 100 && num <= 1000) {
    bonus = 0.2 * num;
  } else if (num > 1000) {
    bonus = 0.1 * num;
  }

  if (num % 2 == 0) {
    // Дали числото е четно
    bonus = bonus + 1;
  }
  if (num % 10 == 5) {
    // Дали числото завършва на 5
    bonus = bonus + 2;
  }

  console.log(bonus, num + bonus);
}
