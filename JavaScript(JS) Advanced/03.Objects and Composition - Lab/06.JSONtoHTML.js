function JSONHTML(input) {
  input = JSON.parse(input);

  let tableColumns = input[0];
  tableColumns = Object.keys(tableColumns);

  for (let i = 1; i < tableColumns.length; i += 2) {
    tableColumns.splice(i, 0, "</th><th>");
  }
  tableColumns.unshift("<tr><th>");
  tableColumns.push("</th></tr>");
  tableColumns = tableColumns.join("");
  console.log(`<table>`);
  console.log(`  ${tableColumns}`);

  for (key of input) {
    let keys = Object.values(key);
    for (let i = 1; i < keys.length; i += 2) {
      keys.splice(i, 0, "</td><td>");
    }
    keys.unshift("<tr><td>");
    keys.push("</td></tr>");
    keys = keys.join("");
    console.log(`  ${keys}`);
  }
  console.log(`</table>`);
}
// JSONHTML(`[{"Name":"Stamat",
// "Score":5.5},
// {"Name":"Rumen",
// "Score":6}]`);
JSONHTML(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
