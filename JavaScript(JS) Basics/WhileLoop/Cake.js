function solve(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let index = 2;
  let command = input[index++];
  let sumOfSlices = 0;
  let cake = width * length;

  while (true) {
    if (cake - sumOfSlices < 0) {
      cake = sumOfSlices - cake;
      console.log(`No more cake left! You need ${cake} pieces more.`);
      break;
    }

    if (command === `STOP`) {
      cake = cake - sumOfSlices;
      console.log(`${cake} pieces are left.`);
      break;
    }
    sumOfSlices += Number(command);
    command = input[index++];
  }
}
solve(["10", "2", "2", "4", "6", "STOP"]);
