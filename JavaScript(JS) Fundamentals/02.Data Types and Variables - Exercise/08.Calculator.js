function solve(firstNumber, operator, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  operator = String(operator);

  if (operator == `+`) {
    console.log((firstNumber + secondNumber).toFixed(2));
  } else if (operator == `-`) {
    console.log((firstNumber - secondNumber).toFixed(2));
  } else if (operator == `*`) {
    console.log((firstNumber * secondNumber).toFixed(2));
  } else if (operator == `/`) {
    console.log((firstNumber / secondNumber).toFixed(2));
  }
}
solve(5, "+", 10);
