function circleArea(input) {
  let type = typeof input;
  if (type === `number`) {
    let r = Number(input);
    let S = Math.PI * r * r;
    console.log(S.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
circleArea(5);
circleArea("name");
