function characterInRange(firstChar, secondChar) {
  let firstAsci = firstChar.charCodeAt();
  let secondAsci = secondChar.charCodeAt();
  let result = ` `;

  if (firstAsci < secondAsci) {
    for (let i = firstAsci + 1; i < secondAsci; i++) {
      let resultToAsci = String.fromCharCode(i);
      result += resultToAsci + ` `;
    }
  } else {
    for (let i = secondAsci + 1; i <= firstAsci - 1; i++) {
      let resultToAsci = String.fromCharCode(i);
      result += resultToAsci + ` `;
    }
  }
  console.log(result);
}
characterInRange("C", "#");
