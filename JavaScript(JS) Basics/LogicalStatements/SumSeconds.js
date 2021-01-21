function time(t1, t2, t3) {
  t1 = Number(t1);
  t2 = Number(t2);
  t3 = Number(t3);

  let tTotal = t1 + t2 + t3;
  let tMinutes = Math.floor(tTotal / 60);
  let tSeconds = tTotal % 60;

  if (tSeconds < 10) {
    console.log(`${tMinutes}:0${tSeconds}`);
  } else {
    console.log(`${tMinutes}:${tSeconds}`);
  }
}
time("14", "12", "10");
