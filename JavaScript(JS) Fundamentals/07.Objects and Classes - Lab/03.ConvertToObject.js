function convertToObject(input) {
  let result = JSON.parse(input);

  for (let key of Object.keys(result)) {
    console.log(`${key}: ${result[key]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
