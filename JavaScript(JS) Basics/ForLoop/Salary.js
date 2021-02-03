function solve(input) {
  let tabs = Number(input[0]);
  let salary = Number(input[1]);
  let penalty = 0;

  for (i = 2; i < input.length; i++) {
    let site = input[i];
    if (site === `Facebook`) {
      penalty += 150;
    }
    if (site === `Instagram`) {
      penalty += 100;
    }
    if (site === `Reddit`) {
      penalty += 50;
    }
  }
  if (penalty >= salary) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(salary - penalty);
  }
}
solve(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
