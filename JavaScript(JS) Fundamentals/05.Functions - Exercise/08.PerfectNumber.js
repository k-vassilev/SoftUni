function perfectNum(num) {
  let temp = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      temp += i;
    }
  }
  if (temp === num && temp !== 0) {
    console.log(`We have a perfect number!`);
  } else {
    console.log(`It's not so perfect.`);
  }
}
perfectNum(6);
perfectNum(28);
perfectNum(1236498);
