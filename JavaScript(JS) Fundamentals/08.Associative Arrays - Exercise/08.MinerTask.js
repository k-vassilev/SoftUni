function solve(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let qty = Number(arr[i + 1]);
    if (!result.hasOwnProperty(element)) {
      result[element] = 0;
    }
    result[element] += qty;

    i++;
  }
  for (let key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}
//solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
