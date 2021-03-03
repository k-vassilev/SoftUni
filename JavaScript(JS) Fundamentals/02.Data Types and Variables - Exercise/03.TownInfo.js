function solve(townName, population, area) {
  townName = String(townName);
  population = Number(population);
  area = Number(area);
  console.log(
    `Town ${townName} has population of ${population} and area ${area} square km.`
  );
}
solve("Sofia", 1286383, 492);
