function oddAndEvenSum(n) {
  let toStr = n.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < toStr.length; i++) {
    let char = toStr.charAt(i);

    if (char % 2 == 0) {
      evenSum += Number(char);
    } else {
      oddSum += Number(char);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234);
