function solve(input) {
  let userName = input[0]; // позицията на userName
  let password = input[1]; // позицията на вярната парола
  let data = input[2]; // начална позиция на опитите за въвеждане на парола
  let index = 3; // counter на текущия елемент, до който сме стигнали след присвояването на индекси 0,1,2

  while (data !== password) {
    data = input[index];
    index++; // увеличаване на стойностите от индекса, от който реално започват опитите за въвеждане, т.е. 3, 4, 5...
  }
  console.log(`Welcome ${userName}!`);
}
