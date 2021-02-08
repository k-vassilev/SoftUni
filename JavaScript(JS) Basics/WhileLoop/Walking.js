function solve(input) {
  //целта е 10 000 стъпки на ден
  let goal = 10000;
  let index = 0; // counter
  let command = input[index++];
  let stepsWalked = 0;

  while (command !== "Going home") {
    let stepsLogged = Number(command);
    command = input[index++];
    stepsWalked += stepsLogged;

    if (stepsWalked >= goal) {
      let overgoal = stepsWalked - goal;
      console.log(`Goal reached! Good job!`);
      console.log(`${overgoal} steps over the goal!`);
      break;
    }
  }
  if (command === "Going home") {
    // какво се случва, ако все пак срещне "Going home"
    let finalSteps = Number(input[input.length - 1]); // по този начин се означават последните въведени след Going home стъпки (последни от масива)
    stepsWalked += finalSteps;
    if (stepsWalked < goal) {
      //вложен if за вариант, в който стъпките наобратно не са й стигнали до целта
      let stepsmore = goal - stepsWalked;
      console.log(`${stepsmore} more steps to reach goal.`);
    } else if (stepsWalked > goal) {
      //вложен if за вариант, в който стъпките наобратно са й стигнали до целта
      let stepsOver = stepsWalked - goal;
      console.log(`Goal reached! Good job!`);
      console.log(`${stepsOver} steps over the goal!`);
    }
  }
}
