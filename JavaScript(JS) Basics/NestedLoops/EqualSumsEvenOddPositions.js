function solve(input) {
  let firstNum = Number(input[0]);
  let lastNum = Number(input[1]);

  let output = ""; // за принтиране на крайния резултат със спейс на ред

  for (i = firstNum; i <= lastNum; i++) {
    let numberAsString = i.toString(); //превръщаме i в стринг, за да можем да го обхождаме по индекси и да смятаме позициите (even/odd)
    let evenSum = 0;
    let oddSum = 0; // двете събирания

    for (let index = 0; index < numberAsString.length; index++) {
      // цикъл за обхождане на позициите на числата една след друга като стринг
      let currentNumber = Number(numberAsString[index]); // прочитаме всеки следващ

      if (index % 2 === 0) {
        evenSum += currentNumber; // за четни добавяме към сумата
      } else {
        oddSum += currentNumber; // други случаи, т.е. нечетни
      }
    }
    if (evenSum === oddSum) {
      output += i + " "; // output ще принтира числото, за което е вярно и спейс (за подреждането)
    }
  }
  console.log(output);
}
solve(["100000", "100050"]);
