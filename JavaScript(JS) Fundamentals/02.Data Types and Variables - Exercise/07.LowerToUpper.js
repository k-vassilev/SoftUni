function solve(character) {
  let upperCase = character.toUpperCase();

  if (upperCase == character) {
    console.log(`upper-case`);
  } else {
    console.log(`lower-case`);
  }
}
solve("L");
