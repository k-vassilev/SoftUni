function solve(difficulty, complexity, pages) {
  difficulty = Number(difficulty);
  complexity = Number(complexity);
  pages = Number(pages);

  if (difficulty >= 80 && complexity >= 80 && pages >= 8) {
    console.log(`Legacy`);
  } else if (difficulty >= 80 && complexity <= 10) {
    console.log(`Master`);
  } else if (difficulty <= 30 && difficulty > 10 && pages <= 1) {
    console.log(`Easy`);
  } else if (difficulty <= 10) {
    console.log(`Elementary`);
  } else if (complexity >= 50 && pages >= 2) {
    console.log(`Hard`);
  } else {
    console.log(`Regular`);
  }
}
solve(80, 40, 30);
