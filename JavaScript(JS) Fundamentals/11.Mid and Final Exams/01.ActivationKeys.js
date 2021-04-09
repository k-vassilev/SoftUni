function solve(input) {
  let rawKey = input.shift();
  for (let line of input) {
    let [command, ...params] = line.split(">>>");
    if (command == "Contains") {
      let word = params[0];
      if (rawKey.includes(word)) {
        console.log(`${rawKey} contains ${word}`);
      } else {
        console.log("Substring not found!");
      }
    }
    if (command == "Flip") {
      let mode = params[0];
      let startIndex = params[1];
      let endIndex = params[2];
      let firstPart = rawKey.substring(0, startIndex);
      let secondPart = rawKey.substring(startIndex, endIndex);
      let thirdPart = rawKey.substring(endIndex);
      if (mode == "Upper") {
        secondPart = secondPart.toUpperCase();
        rawKey = firstPart + secondPart + thirdPart;
        console.log(rawKey);
      } else if (mode == "Lower") {
        secondPart = secondPart.toLowerCase();
        rawKey = firstPart + secondPart + thirdPart;
        console.log(rawKey);
      }
    }
    if (command == "Slice") {
      let startIndex = params[0];
      let endIndex = params[1];
      let firstPart = rawKey.substring(0, startIndex);
      let secondPart = rawKey.substring(startIndex, endIndex);
      let thirdPart = rawKey.substring(endIndex);
      rawKey = firstPart + thirdPart;
      console.log(rawKey);
    }
    if (command == "Generate") {
      break;
    }
  }
  console.log(`Your activation key is: ${rawKey}`);
}
solve([
  `abcdefghijklmnopqrstuvwxyz`,
  `Slice>>>2>>>6`,
  `Flip>>>Upper>>>3>>>14`,
  `Flip>>>Lower>>>5>>>7`,
  `Contains>>>def`,
  `Contains>>>deF`,
  `Generate`,
]);
