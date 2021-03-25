function solve(arr) {
  let employees = [];
  arr.forEach((element) => {
    let person = {
      name: element,
      number: element.length,
    };
    employees.push(person);
  });
  employees.forEach((obj) => {
    console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
  });
  // let myObj = {};
  // for (let i = 0; i < input.length; i++) {
  //   myObj.name = input[i].length;
  //   myObj.number = input[i];
  //   console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`);
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
