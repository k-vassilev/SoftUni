function solve(input) {
  let n = Number(input[0]); // брой съдии
  let index = 1;
  let name = input[index]; // всяко име на задача
  let totalAvg = 0; // средна обща
  let countOfProblems = 0; // каунтър на задачите

  while (name != "Finish") {
    // въртим до Finish
    countOfProblems++;
    let avgGrade = 0;
    for (let i = 0; i < n; i++) {
      // цикъл, който показва колко оценки има, т.е. до броя на журито
      let grade = Number(input[++index]); // за да прочете оценката, но да прескочи името на задачата (++ отпред)
      avgGrade += grade; // събираме със средната
    }
    avgGrade /= n; // делим я на броя на журито, защото avgGrade е сумата от всички
    totalAvg += avgGrade;
    console.log(`${name} - ${avgGrade.toFixed(2)}.`);

    name = input[++index]; // за да се върти цикъла и да не влиза в Loop, като прескача името на задачта (name)
  }
  let finalGrade = totalAvg / countOfProblems; // сбор от всички, делена на броя задачи
  console.log(`Student's final assessment is ${finalGrade.toFixed(2)}.`);
}
solve([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
