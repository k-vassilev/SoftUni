function solve(input) {
  let studentName = input[0];
  let index = 1;
  let commandLine = input[index++];
  let studentPoints = 0;
  let studentGrade = 0;
  let breakTrigger = false;

  while (commandLine != "Midnight") {
    for (let i = 1; i <= 6; i++) {
      let currentCommand = Number(commandLine);
      studentPoints += currentCommand;

      if (currentCommand < 0) {
        console.log(`${studentName} was cheating!`);
        breakTrigger = true;
        break;
      }

      commandLine = input[index++];
    }
    if (breakTrigger === true) {
      commandLine = input[index++];
      if (commandLine === "Midnight") {
        break;
      }
      studentPoints = 0;
      studentName = commandLine;
      commandLine = input[index++];
      breakTrigger = false;
    } else {
      studentGrade = Math.floor((studentPoints / 600) * 100);
      studentGrade *= 0.06;
      if (studentGrade >= 5) {
        console.log(`===================`);
        console.log(`|   CERTIFICATE   |`);
        console.log(`|    ${studentGrade.toFixed(2)}/6.00    |`);
        console.log(`===================`);
        console.log(`Issued to ${studentName}`);
        studentPoints = 0;
        studentName = commandLine;
        if (studentName === "Midnight") {
          break;
        }
        commandLine = input[index++];

        //  break;
      } else if (studentGrade < 3) {
        studentGrade = 2.0;
        console.log(`${studentName} - ${studentGrade.toFixed(2)}`);
        studentPoints = 0;
        studentName = commandLine;
        if (studentName === "Midnight") {
          break;
        }
        commandLine = input[index++];
      } else {
        console.log(`${studentName} - ${studentGrade.toFixed(2)}`);
        studentPoints = 0;
        studentName = commandLine;
        if (studentName === "Midnight") {
          break;
        }
        commandLine = input[index++];
      }
    }
    if (commandLine === "Midnight") {
      break;
    }
  }
}
solve([
  "John",
  "10",
  "-1",
  "George",
  "100",
  "100",
  "100",
  "100",
  "40",
  "0",
  "John",
  "10",
  "-1",
  "Tom",
  "0",
  "60",
  "100",
  "100",
  "40",
  "0",
  "Peter",
  "100",
  "100",
  "100",
  "100",
  "100",
  "70",
  "Pesho",
  "100",
  "100",
  "100",
  "100",
  "100",
  "70",
  "Midnight",
]);
