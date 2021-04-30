function calc() {
  let output = document.querySelector("#sum");
  let numOne = Number(document.querySelector("#num1").value); // .value when the field is input
  let numTwo = Number(document.querySelector("#num2").value);

  output.value = numOne + numTwo;
}
