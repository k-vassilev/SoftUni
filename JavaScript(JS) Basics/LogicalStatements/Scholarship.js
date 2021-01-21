function solve(income, grade, salary) {
  income = Number(income);
  grade = Number(grade);
  salary = Number(salary);

  let socialScholarship = Math.floor(0.35 * salary);
  let excellenceScholarship = Math.floor(grade * 25);

  if (income < salary && grade >= 4.5 && grade < 5.5) {
    console.log(`You get a Social scholarship ${socialScholarship} BGN`);
  } else if (grade >= 5.5) {
    if (income >= salary) {
      console.log(
        `You get a scholarship for excellent results ${excellenceScholarship} BGN`
      );
    } else if (income < salary) {
      if (excellenceScholarship >= socialScholarship) {
        console.log(
          `You get a scholarship for excellent results ${excellenceScholarship} BGN`
        );
      } else {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
      }
    }
  } else {
    console.log(`You cannot get a scholarship!`);
  }
}
solve("300.00", "5.65", "420.00");
