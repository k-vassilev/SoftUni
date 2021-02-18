function solve(input1, input2) {
  let students = Number(input1);
  let tasks = Number(input2);

  let firstCalc = Math.ceil(tasks * 2.8); // to round
  let secCalc = students * firstCalc;

  let eachThree = students * Math.floor(tasks / 3); // each three

  let totalsubmissions = secCalc + eachThree;
  let memoryNeeded = 5 * Math.ceil(totalsubmissions / 10);

  console.log(`${memoryNeeded} KB needed`);
  console.log(`${totalsubmissions} submissions`);
}
solve(25, 10);
