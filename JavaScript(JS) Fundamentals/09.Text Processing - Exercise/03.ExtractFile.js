function solve(input) {
  let words = input.split(`\\`);
  let destination = words.pop();
  let lastDot = destination.lastIndexOf(`.`);
  console.log(`File name: ${destination.substring(0, lastDot)}`);
  console.log(`File extension: ${destination.substring(lastDot + 1)}`);
}
solve("C:\\Internal\\training-internal\\Template.pptx");
