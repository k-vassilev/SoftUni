function bombNumbers(arrayOne, arraytwo) {
  let specialNum = arraytwo[0];
  let power = arraytwo[1];
  let sum = 0;
  for (let index = 0; index < arrayOne.length; index++) {
    if (arrayOne.includes(specialNum)) {
      let result = arrayOne.indexOf(specialNum);
      arrayOne.splice(result - power, power * 2 + 1);
    }
  }
  for (const i of arrayOne) {
    sum += i;
  }
  console.log(arrayOne);
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
//bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
