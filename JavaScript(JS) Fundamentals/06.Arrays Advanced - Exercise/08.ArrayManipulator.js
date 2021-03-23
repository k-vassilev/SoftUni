function arrayManipulator(arrayOne, arrayTwo) {
  let copyArrOne = arrayOne.slice();
  let copyArTwo = arrayTwo.slice();
  let result = arrayOne.slice();

  for (let i = 0; i < arrayTwo.length; i++) {
    let command = copyArTwo[i].split();
    for (const iterator of command) {
      let coman = iterator.split(` `);
      if (coman.includes(`add`)) {
        result.splice(coman[1], 0, Number(coman[2]));
      }
      if (coman.includes(`contains`)) {
        let contains = result.includes(Number(coman[1]));
        if (contains) {
          console.log(arrayOne.indexOf(Number(coman[1])));
        } else {
          console.log(`-1`);
        }
      }
      if (coman.includes(`print`)) {
        break;
      }
      if (coman.includes(`addMany`)) {
        //console.log(`addMany`);
        //console.log(coman)

        let comanI = coman[1];

        for (let j = 2; j < coman.length; j++) {
          const element = coman[j];
          //console.log(element);
          result.splice(comanI, 0, element);
        }

        //result.splice(comanI, 0, addMany);
      }
      if (coman.includes(`remove`)) {
        //console.log(`remove`);
      }
      if (coman.includes(`shift`)) {
        //console.log(`shift`);
      }
    }
    // console.log(command);
  }
  console.log(result);
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
