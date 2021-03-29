function address(input) {
  let myAssocArray = {};
  for (let line of input) {
    let [person, address] = line.split(":");
    myAssocArray[person] = address;
  }

  //conversion to an array from object
  let converted = Object.entries(myAssocArray);
  //sorting it out
  // a - an array with person + address (b - same)
  // a[0] is the name
  converted.sort((a, b) => a[0].localeCompare(b[0]));
  console.log(converted);

  for (let line of converted) {
    console.log(`${line[0]} -> ${line[1]}`);
  }
}
address([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
