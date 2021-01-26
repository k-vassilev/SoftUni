function solve(n1, n2, operator) {
  n1 = Number(n1);
  n2 = Number(n2);
  let result = 0;
  let evenOdd;

  if (operator === `+` || operator === `-` || operator === `*`) {
    if (operator === `+`) {
      result = n1 + n2;
      if (result % 2 == 0) {
        evenOdd = `even`;
      } else if (result % 2 != 0) {
        evenOdd = `odd`;
      }
    } else if (operator === `-`) {
      result = n1 - n2;
      if (result % 2 == 0) {
        evenOdd = `even`;
      } else if (result % 2 != 0) {
        evenOdd = `odd`;
      }
    } else if (operator === `*`) {
      result = n1 * n2;
      if (result % 2 == 0) {
        evenOdd = `even`;
      } else if (result % 2 != 0) {
        evenOdd = `odd`;
      }
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
  }

  if (operator === `/` && n2 != 0) {
    result = (n1 / n2).toFixed(2);
    console.log(`${n1} / ${n2} = ${result}`);
  } else if (operator === `/` && n2 == 0) {
    console.log(`Cannot divide ${n1} by zero`);
  }

  if (operator === `%` && n2 != 0) {
    result = n1 % n2;
    console.log(`${n1} % ${n2} = ${result}`);
  } else if (operator === `%` && n2 == 0) {
    console.log(`Cannot divide ${n1} by zero`);
  }
}
solve("10", "0", "%");
