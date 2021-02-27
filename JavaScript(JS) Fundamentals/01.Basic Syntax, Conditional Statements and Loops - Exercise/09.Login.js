function solve(input) {
  let index = 1;
  let realUserName = input[0];
  let splitString = input[0].split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  let correctPassword = joinArray;

  let userName = input[index];
  let counter = 0;
  for (let i = index; i < input.length; i++) {
    let newLine = input[index];

    if (newLine !== correctPassword && counter < 3) {
      counter++;
      console.log(`Incorrect password. Try again.`);
    } else if (newLine !== correctPassword && counter >= 3) {
      console.log(`User ${realUserName} blocked!`);
      break;
    } else if (newLine === correctPassword) {
      console.log(`User ${realUserName} logged in.`);
      break;
    }

    index++;
  }
}
solve(["Acer", "login", "go", "let me in", "recA"]);
