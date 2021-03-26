function towns(input) {
  let table = {};
  for (let i = 0; i < input.length; i++) {
    [town, latitude, longitude] = input[i].split(` | `);
    table.town = town;
    table.latitude = Number(latitude).toFixed(2);
    table.longitude = Number(longitude).toFixed(2);
    console.log(table);
  }
}

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
