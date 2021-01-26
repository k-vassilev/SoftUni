function solve(age, sex) {
  age = Number(age);

  if (sex == `m`) {
    if (age >= 16) {
      console.log(`Mr.`);
    } else if (age < 16) {
      console.log(`Master`);
    }
  }
  if (sex == `f`) {
    if (age >= 16) {
      console.log(`Ms.`);
    } else if (age < 16) {
      console.log(`Miss`);
    }
  }
}
solve("12", "f");
