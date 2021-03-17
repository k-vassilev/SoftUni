function NxnMatrix(number) {
  for (let index = 0; index < number; index++) {
    let result = ` `;
    for (let j = 0; j < number; j++) {
      result += number + " ";
    }
    console.log(result);
  }
}
NxnMatrix(3);
NxnMatrix(7);
NxnMatrix(2);
