function solve(deposit, time, interest) {
  let output =
    Number(deposit) +
    Number(time) * ((Number(deposit) * (Number(interest) / 100)) / 12);

  console.log(output);
}
solve("200", "3", "5.7");
