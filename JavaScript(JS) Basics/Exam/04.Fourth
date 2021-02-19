function solve(students, seasons) {
  students = Number(students);
  seasons = Number(seasons);

  for (i = 1; i <= seasons; i++) {
    let firstExam = Math.ceil((students * 90) / 100);
    let secondExam = Math.ceil((firstExam * 90) / 100);
    let continuing = Math.ceil((secondExam * 80) / 100);
    let reEntered = Math.ceil((continuing * 5) / 100);
    if (i % 3 == 0) {
      reEntered = Math.ceil((continuing * 15) / 100);
    }
    students = continuing + reEntered;
  }
  console.log(`Students: ${students}`);
}
solve(2000, 5);
