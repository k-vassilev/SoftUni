function solve(arr) {
  let color = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  let type = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  let players = {};
  for (let element of arr) {
    let line = element.split(`: `);
    let name = line[0];
    let cards = line[1].split(`, `);
    if (!players.hasOwnProperty(name)) {
      players[name] = [];
    }
    players[name].push(...cards);
  }

  for (let player in players) {
    let playerSum = 0;
    let cards = players[player];
    cards = new Set(cards);
    cards = Array.from(cards);
    for (let card of cards) {
      let letters = card.split(``);
      let typeOfCard = letters.pop();
      let numOfCard = letters.join("");
      if (isNaN(numOfCard)) {
        numOfCard = type[numOfCard];
      }
      playerSum += Number(numOfCard) * color[typeOfCard];
    }
    console.log(`${player}: ${playerSum}`);
  }
}
solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
