function solve(input) {
  let total = 0; //сумата
  let index = 0; //counter
  let command = input[index++]; // всяко следващо от нула натам; тук само се дефинира как ще работи, а в цикъла реално върши работата; същото би било, ако е 0

  while (command !== "NoMoreMoney") {
    // докато не срещне "NoMoreMoney", да се изпълнява
    let currentAmount = Number(command); // чети всеки следващ индекс от инпута като число и го запиши в "CurrentAmount"
    if (currentAmount < 0) {
      // когато е по-малко от нула, да се прекъсне
      console.log(`Invalid operation!`);
      break;
    }
    total += currentAmount; // наслагва се всяка следваща стойност на currentAmount върху total (което започва от нула в началото)
    console.log(`Increase: ${currentAmount.toFixed(2)}`); // печатаме всяка следваща вноска (т.е. всеки следващ индекс от инпута)
    command = input[index++]; // върти цикъла, след като е направена сметката
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
solve(["120", "45.55", "-150"]);
