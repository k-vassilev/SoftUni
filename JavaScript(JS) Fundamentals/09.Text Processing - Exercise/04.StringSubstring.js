function solve(pass, sentence) {
  let words = sentence.split(` `);
  let isTrue = true;

  for (let word of words) {
    let newPass = pass.toLowerCase();
    let command = word.toLowerCase();
    if (command === newPass) {
      console.log(pass);
      isTrue = false;
      break;
    }
  }
  if (isTrue) {
    console.log(`${pass} not found!`);
  }
}
solve("javascript", "JavaScript is the best programming language");
//solve("python", "JavaScript is the best programming language");
