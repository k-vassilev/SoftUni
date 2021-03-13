function grade(inputGrade) {
  if (inputGrade < 3.0) {
    console.log(`Fail (2)`);
  } else if (inputGrade < 3.5) {
    console.log(`Poor (${inputGrade.toFixed(2)})`);
  } else if (inputGrade < 4.5) {
    console.log(`Good (${inputGrade.toFixed(2)})`);
  } else if (inputGrade < 5.5) {
    console.log(`Very good (${inputGrade.toFixed(2)})`);
  } else if (inputGrade >= 5.5) {
    console.log(`Excellent (${inputGrade.toFixed(2)})`);
  }
}
grade(3.33);
grade(4.5);
grade(2.99);
