function solve(input) {
  let index = 0; // мястото на индекса в input
  let name = input[index++]; // името
  let yearsFailed = 0; //брояч на години, в които е скъсван
  let year = 1; // започва се от текущата година - т.е. 1 клас
  let total = 0; // average grade
  let yearlyGrade = Number(input[index++]); // всяка следваща позиция от input (т.е. индекс) представлява оценката за следващата година
  while (year <= 12) {
    if (yearlyGrade < 4) {
      // колко пъти fail-ва ще увеличаваме чрез тази проверка
      yearsFailed++;
      if (yearsFailed === 2) {
        // повече от веднъж скъсан, изключваме го
        break;
      }
    } else {
      // ако са му  над 4 оценките
      total += yearlyGrade; // прибавяме към общото оценката, ако е над 4
      year++; //увеличаваме годината, ако сме я минали успешно (т.е. индикация, че се преминава в друг клас)
    }
    yearlyGrade = Number(input[index++]); // след всички проверки, да премине пак през следващото (++)
  }
  if (yearsFailed < 2) {
    // ако е fail по-малко от два пъти, т.е. завършил е
    let averGrade = (total / 12).toFixed(2); // общите оценки делим на класовете - т.е. 12
    console.log(`${name} graduated. Average grade: ${averGrade}`);
  } else {
    console.log(`${name} has been excluded at ${year} grade`);
  }
}

solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
