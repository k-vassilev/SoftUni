function solve(input) {
  let index = 0;
  let command = input[index];
  let primeSum = 0;
  let nonPrimeSum = 0;

  while (command != "stop") {
    // чете до команда стоп
    let num = Number(command);
    if (num < 0) {
      // за отрицателни
      console.log(`Number is negative.`);
    } else if (num === 1) {
      primeSum += num; // при 1, добавяме 1 към сумата
    } else {
      // във вс. други случаи създаваме каунтър, който за просто число брои, когато се дели на 1 и на себе си
      let count = 0;
      for (let i = 1; i <= num; i++) {
        // въртим числата от 1 до num, за да видим на колко от тях се дели без остатък
        if (num % i === 0) {
          // Num е числото, i се върти от 1 до числото; за всеки път, в който числото се дели на i без остатък, записваме
          count++;
        }
      }
      if (count === 2) {
        // ако то се дели 2 пъти без остатък, т.е. веднъж на себе си и веднъж на 1 - то е просто, добавяме го
        primeSum += num;
      } else {
        // не е просто число
        nonPrimeSum += num;
      }
    }
    command = input[++index]; // за да въртим големия цикъл; ++ e отпред, за да увеличи първо и тогава да завърти
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
solve(["30", "83", "33", "-1", "20", "stop"]);
