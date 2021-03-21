function distinctArr(arr) {
  function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }
  //https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
  let result = (removeDuplicates(arr))
  console.log(result.join(` `))
}
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
