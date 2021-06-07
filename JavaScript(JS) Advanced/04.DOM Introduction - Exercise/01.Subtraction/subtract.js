function subtract() {
  let firstNum = Number(document.querySelector("#firstNumber").value);
  let secondNum = Number(document.querySelector("#secondNumber").value);
  let result = firstNum - secondNum;
  let resultField = document.querySelector("#result"); // gets the actual div, not the content of it
  resultField.textContent = result; // changes the value of the above field
}
