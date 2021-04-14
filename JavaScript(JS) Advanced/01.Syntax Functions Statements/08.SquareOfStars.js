function squareOfStars(input) {
  if (!input) {
    for (let i = 0; i < 5; i++) {
      console.log(`* `.repeat(5).trimEnd());
    }
  } else {
    for (let i = 0; i < input; i++) {
      console.log(`* `.repeat(input).trimEnd());
    }
  }
}
squareOfStars(3);
squareOfStars();
