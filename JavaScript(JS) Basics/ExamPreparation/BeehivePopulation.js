function solve(population, years) {
  population = Number(population);
  years = Number(years);
  let born = 0;
  let died = 0;
  let migrate = 0;

  for (i = 1; i <= years; i++) {
    born = parseInt(population / 10) * 2;
    population = population + born;
    if (i % 5 === 0) {
      migrate = parseInt(population / 50) * 5;
      population = population - migrate;
    }

    died = parseInt(population / 20) * 2;
    population = population - died;
  }

  console.log(`Beehive population: ${population}`);
}
solve(1000, 23);
