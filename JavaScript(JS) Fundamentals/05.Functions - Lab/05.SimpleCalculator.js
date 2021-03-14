function simpleCalc(a, b, toDo) {
  if (toDo == `multiply`) {
    console.log(a * b);
  }
  if (toDo == `divide`) {
    console.log(a / b);
  }
  if (toDo == `add`) {
    console.log(a + b);
  }
  if (toDo == `subtract`) {
    console.log(a - b);
  }
}
simpleCalc(50, 13, `subtract`);
