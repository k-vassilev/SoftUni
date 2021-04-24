function townPopulation(input) {
  let cityObj = {};
  for (let el of input) {
    let [city, population] = el.split(` <-> `);
    if (cityObj[city] !== undefined) {
      cityObj[city] += Number(population);
    } else {
      cityObj[city] = Number(population);
    }
  }
  for (const city in cityObj) {
    console.log(`${city} : ${cityObj[city]}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
  "Sofia <-> 1200",
]);
