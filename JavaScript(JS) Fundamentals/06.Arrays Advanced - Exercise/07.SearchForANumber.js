function searchForANumber(arrayOne, arrayTwo) {
  let result = [];
  let numOfEl = arrayTwo[0];
  let numToDel = arrayTwo[1];
  let searchedNum = arrayTwo[2];

  for (let index = 0; index < numOfEl; index++) {
    result.push(arrayOne[index]);
  }

  for (let i = 0; i < numToDel; i++) {
    result.shift();
  }

  var n = 0;
  for (j = 0; j < result.length; j++) {
    if (result[j] == searchedNum) n++;
  }

  console.log(`Number ${searchedNum} occurs ${n} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
