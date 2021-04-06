function solve(input) {
  let length = input.length;
  let firstLine = input.substring(0, length / 2);
  let secondLine = input.substring(length / 2, length);
  let first = [];
  let second = [];
  for (let i = 0; i < firstLine.length; i++) {
    let char = firstLine[i];
    first.push(char);
  }
  for (let i = 0; i < secondLine.length; i++) {
    let char = secondLine[i];
    second.push(char);
  }
  first.reverse();
  second.reverse();
  console.log(first.join(``));
  console.log(second.join(``));
}
//solve('tluciffiDsIsihTgnizamAoSsIsihT')
solve("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
