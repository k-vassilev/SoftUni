function solve(students, tasks, energy) {
  students = Number(students);
  tasks = Number(tasks);
  energy = Number(energy);
  let totalTasks = 0;
  let totalQuestions = 0;

  while (true) {
    energy = energy + 2 * tasks;
    students = students - tasks;
    let questions = 0;
    questions = students * 2;
    energy = energy - 3 * questions;
    totalTasks += tasks;
    totalQuestions += questions;
    if (students < 10 && energy > 0) {
      console.log(`The students are too few!`);
      console.log(`Problems solved: ${totalTasks}`);
      break;
    }

    if (energy <= 0) {
      console.log(`The trainer is too tired!`);
      console.log(`Questions asked: ${totalQuestions}`);
      break;
    }

    if (students >= 10) {
      addStudents = Number(Math.round(students / 10).toFixed(0));
      students = students + addStudents;
    }
  }
}
solve(20, 1, 100);
