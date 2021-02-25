function solve(groupOfPeople, typeOfGroup, dayOfTheWeek) {
  let price = 0;

  if (typeOfGroup === `Students`) {
    if (dayOfTheWeek === `Friday`) {
      price = 8.45;
    } else if (dayOfTheWeek === `Saturday`) {
      price = 9.8;
    } else if (dayOfTheWeek === `Sunday`) {
      price = 10.46;
    }
  } else if (typeOfGroup === `Business`) {
    if (dayOfTheWeek === `Friday`) {
      price = 10.9;
    } else if (dayOfTheWeek === `Saturday`) {
      price = 15.6;
    } else if (dayOfTheWeek === `Sunday`) {
      price = 16;
    }
  } else if (typeOfGroup === `Regular`) {
    if (dayOfTheWeek === `Friday`) {
      price = 15;
    } else if (dayOfTheWeek === `Saturday`) {
      price = 20;
    } else if (dayOfTheWeek === `Sunday`) {
      price = 22.5;
    }
  }
  let totalPrice = price * groupOfPeople;
  if (typeOfGroup === `Students` && groupOfPeople >= 30) {
    totalPrice = price * groupOfPeople * 0.85;
  }
  if (typeOfGroup === `Business` && groupOfPeople >= 100) {
    totalPrice = price * (groupOfPeople - 10);
  }
  if (typeOfGroup === `Regular` && groupOfPeople >= 10 && groupOfPeople <= 20) {
    totalPrice = price * groupOfPeople * 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
