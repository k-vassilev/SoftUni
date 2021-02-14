function solve(int, strength, sex) {
  int = Number(int);
  strength = Number(strength);

  if (int >= 80) {
    if (strength >= 80 && sex == `female`) {
      console.log(`Queen Bee`);
    } else {
      console.log(`Repairing Bee`);
    }
  } else if (int >= 60) {
    console.log(`Cleaning Bee`);
  } else if (strength >= 80) {
    if (sex == `male`) {
      console.log(`Drone Bee`);
    } else if (strength >= 60) {
      console.log(`Guard Bee`);
    }
  } else {
    console.log(`Worker Bee`);
  }
}
solve(82, 81, `female`);
