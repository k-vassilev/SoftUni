function solve(input) {
  let tournamentDays = input[0];
  let index = 1;
  let inputLine = input[index++];

  let winCount = 0;
  let loseCount = 0;
  let winMoney = 0;
  let dailyWinCount = 0;
  let dailyLoseCount = 0;
  let flag = 0;

  for (let i = 1; i <= tournamentDays; i++) {
    let internalWin = 0;
    let internalLose = 0;
    let currentMoney = 0;
    while (true) {
      //(inputLine !== `Finish`)
      let sport = inputLine;
      let outcome = input[index++];
      if (outcome === `win`) {
        winCount++;
        internalWin++;
      } else if (outcome === `lose`) {
        loseCount++;
        internalLose++;
      }
      inputLine = input[index++];
      if (inputLine === `Finish`) {
        currentMoney = internalWin * 20;
        if (internalWin > internalLose) {
          flag = 1;
          currentMoney = currentMoney * 1.1;
        } else {
          flag = 0;
        }
        winMoney += currentMoney;
        index++;
        break;
      }
    }
    if (flag === 1) {
      dailyWinCount++;
    } else {
      dailyLoseCount++;
    }
  }
  if (dailyWinCount > dailyLoseCount) {
    winMoney = winMoney * 1.2;
    console.log(
      `You won the tournament! Total raised money: ${winMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${winMoney.toFixed(2)}`
    );
  }
}
solve([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
