function solve(firstParam, secondParam) {
  firstParam = document.querySelector("#text").value;
  secondParam = document.querySelector("#naming-convention").value;
  let resultField = document.querySelector("#result");
  let toLower = firstParam.split(" ");
  let toLowerResult = [];
  for (let word of toLower) {
    word = word.toLowerCase();
    toLowerResult.push(word);
  }

  let camelCase = [];
  let pascalCase = [];
  for (let i = 0; i < toLowerResult.length; i++) {
    let word = toLowerResult[i];
    let toPascal = word[0].toUpperCase() + word.slice(1);
    pascalCase.push(toPascal);
  }
  for (let i = 0; i < toLowerResult.length; i++) {
    let word = toLowerResult[i];
    if (i == 0) {
      camelCase.push(word);
    } else {
      let toCamel = word[0].toUpperCase() + word.slice(1);
      camelCase.push(toCamel);
    }
  }

  if (secondParam == "Pascal Case") {
    resultField.textContent = pascalCase.join("");
  } else if (secondParam == "Camel Case") {
    resultField.textContent = camelCase.join("");
  } else {
    resultField.textContent = "Error!";
  }
}
