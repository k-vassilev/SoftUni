function factorial(numOne, numTwo) {
  let firstFact = 1;
  let secondFact = 1;
  for (let i = 1; i <= numOne; i++) {
    firstFact *= i;
  }
  for (let i = 1; i <= numTwo; i++) {
    secondFact *= i;
  }
  console.log((firstFact / secondFact).toFixed(2));
}
factorial(6, 2);
