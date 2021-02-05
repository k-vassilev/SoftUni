function solve(input) {
  let change = (Number(input[0]) * 100).toFixed(0);
  counter = 0;

  while (change > 0) {
    if (change - 200 >= 0) {
      change -= 200;
      counter++;
    } else if (change - 100 >= 0) {
      change -= 100;
      counter++;
    } else if (change - 50 >= 0) {
      change -= 50;
      counter++;
    } else if (change - 20 >= 0) {
      change -= 20;
      counter++;
    } else if (change - 10 >= 0) {
      change -= 10;
      counter++;
    } else if (change - 5 >= 0) {
      change -= 5;
      counter++;
    } else if (change - 2 >= 0) {
      change -= 2;
      counter++;
    } else if (change - 1 >= 0) {
      change -= 1;
      counter++;
    }
  }
  console.log(counter);
}
solve(["0.56"]);
