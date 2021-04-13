function mathOps(num1, num2, str) {
  if (str === `+`) {
    console.log(num1 + num2);
  }
  if (str === `-`) {
    console.log(num1 - num2);
  }
  if (str === `*`) {
    console.log(num1 * num2);
  }
  if (str === `/`) {
    console.log(num1 / num2);
  }
  if (str === `%`) {
    console.log(num1 % num2);
  }
  if (str === `**`) {
    console.log(num1 ** num2);
  }
}
mathOps(5, 6, "+");
mathOps(3, 5.5, '*');
