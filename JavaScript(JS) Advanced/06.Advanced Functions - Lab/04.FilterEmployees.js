function solve(input, filter) {
  let objects = JSON.parse(input);
  let result = [];
  let [objKey, objVal] = filter.split("-");
  for (const obj of objects) {
    if (obj[objKey] === objVal) {
      let firstName = obj.first_name;
      let lastname = obj.last_name;
      let email = obj.email;
      let sentence = `${firstName} ${lastname} - ${email}`;
      result.push(sentence);
    }
  }
  for (let i = 0; i < result.length; i++) {
    console.log(`${i}. ${result[i]}`);
  }
}
solve(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
