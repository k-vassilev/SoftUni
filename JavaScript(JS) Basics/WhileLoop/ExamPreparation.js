function solve(input) {
  let badGrades = input[0]; // допустим брой лоши оценки
  let index = 1; // първа позиция, която не е фиксирана
  let achievedBadGrades = 0; // counter на изкарани лоши оценки
  // 1 позиция - string; 2 позиция - число; 3 позиция - string; 4 позиция - число ....
  let averageScore = 0; // за сметката накрая
  // за финалния брой решени задачи в края
  let lastProblem = 0;
  counter = 0; // преброява колко пъти се върти цикълът -> колко задачи са решении
  let isEnough = false;

  while (true) {
    let nextCommandString = input[index++];
    let nextCommandNumber = Number(input[index++]);
    if (nextCommandString === "Enough") {
      isEnough = true;
      break;
    }
    if (nextCommandNumber <= 4) {
      achievedBadGrades++;
    }

    averageScore += nextCommandNumber;
    counter++;
    if (achievedBadGrades >= badGrades) {
      break;
    }
  }
  if (achievedBadGrades >= badGrades) {
    console.log(`You need a break, ${achievedBadGrades} poor grades.`);
  }

  lastProblem = input[input.length - 3];
  if (isEnough) {
    averageScore = (averageScore / counter).toFixed(2);
    console.log(`Average score: ${averageScore}`);
    console.log(`Number of problems: ${counter}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}
solve([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
