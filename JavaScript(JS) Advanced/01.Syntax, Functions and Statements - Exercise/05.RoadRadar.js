function roadRadar(speed, area) {
  speed = Number(speed);
  let speedLimit = 0;
  if (area === `motorway`) {
    speedLimit = 130;
  } else if (area === `interstate`) {
    speedLimit = 90;
  } else if (area === `city`) {
    speedLimit = 50;
  } else if (area === `residential`) {
    speedLimit = 20;
  }

  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    let speedOverLimit = speed - speedLimit;
    let status = ``;
    if (speedOverLimit <= 20) {
      status = `speeding`;
    } else if (speedOverLimit > 20 && speedOverLimit <= 40) {
      status = `excessive speeding`;
    } else {
      status = `reckless driving`;
    }
    console.log(
      `The speed is ${speedOverLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}
roadRadar(40, "city");
