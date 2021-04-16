function timeToWalk(steps, stepLength, speed) {
  steps = Number(steps);
  stepLength = Number(stepLength);
  speed = Number(speed * 1000);

  let distance = steps * stepLength;
  let rested = Math.floor(distance / 500);
  let time = (distance / speed) * 60;
  let totalTime = time + rested;
  let minutes = Math.floor(totalTime);
  let hours = 0;
  let seconds = (
    ((totalTime * 10 - Math.floor(totalTime) * 10) / 10) *
    60
  ).toFixed(0);
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
