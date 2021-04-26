function calorieObj(input) {
  let resultObj = {};
  for (let i = 0; i < input.length; i += 2) { //i += 2 to get every second duplets
    let key = input[i]; // get first value as key
    let value = input[i + 1]; // get 2nd value as value of key
    resultObj[key] = Number(value); // adds "key" as property to the object equal to value resultObj{(key: value)}
  }
  return resultObj;
}
console.log(calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
