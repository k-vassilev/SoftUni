function houseParty(arr) {
  let going = [];
  for (const command of arr) {
    let sentence = command.split(` `);

    for (let i = 0; i < sentence.length; i++) {
      const element = sentence[i];

      let isgoing = going.includes(element);
      if (sentence.includes(`is going!`)) {
        // if (isgoing == false) {
        //   going.push(element);
        // } else {
        //   console.log(`${element} is already in the list!`);
        // }
      }
      if (sentence.includes(`not`)) {
        if (isgoing) {
          let present = going.indexOf(element);
          going.splice(present, 1);
        } else {
          console.log(`${element} is not in the list!`);
        }
      } else {
        if (isgoing == false) {
          going.push(element);
        } else {
          console.log(`${element} is already in the list!`);
        }
      }
      if (sentence.length === 3) {
        i += 2;
      } else {
        i += 3;
      }
    }
  }
  console.log(going.join(`\n`));
}
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
