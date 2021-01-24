function solve(product, day, qty) {
  qty = Number(qty);

  let price = 0;

  switch (day) {
    case `Monday`:
    case `Tuesday`:
    case `Wednesday`:
    case `Thursday`:
    case `Friday`:
      if (product === `banana`) {
        price = 2.5;
      } else if (product === `apple`) {
        price = 1.2;
      } else if (product === `orange`) {
        price = 0.85;
      } else if (product === `grapefruit`) {
        price = 1.45;
      } else if (product === `kiwi`) {
        price = 2.7;
      } else if (product === `pineapple`) {
        price = 5.5;
      } else if (product === `grapes`) {
        price = 3.85;
      }
      break;
    case `Saturday`:
    case `Sunday`:
      if (product === `banana`) {
        price = 2.7;
      } else if (product === `apple`) {
        price = 1.25;
      } else if (product === `orange`) {
        price = 0.9;
      } else if (product === `grapefruit`) {
        price = 1.6;
      } else if (product === `kiwi`) {
        price = 3;
      } else if (product === `pineapple`) {
        price = 5.6;
      } else if (product === `grapes`) {
        price = 4.2;
      }
      break;
  }
  if (price > 0) {
    console.log((price * qty).toFixed(2));
  } else {
    console.log(`error`);
  }
}
solve("kiwi", "Monday", "2.5");
