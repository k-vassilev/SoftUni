function solve(input) {
  let minNumber = Number.MIN_SAFE_INTEGER; // дефинира се, за да има с какво да се сравни
  let index = 0;
  let command = input[index++]; // всеки следващ индекс
  while (command !== "Stop") {
    // докато не види "Стоп", да цикли

    let currentNumber = Number(command); // дефинираме число, което е = на всяко следващо от инпута

    if (currentNumber > minNumber) {
      // сраавянваме го с минималното и ако е по-голямо, го записваме
      minNumber = currentNumber; // мин. става последното, което сме сравнявали, за да го сравняваме със следващите
    }
    command = input[index++]; // въртим цикъла
  }
  console.log(minNumber); // принтираме minNumber, защото е последното, с което е било сравнявано и не е минала проверката
}
solve(["45", "-20", "7", "99", "Stop"]);
