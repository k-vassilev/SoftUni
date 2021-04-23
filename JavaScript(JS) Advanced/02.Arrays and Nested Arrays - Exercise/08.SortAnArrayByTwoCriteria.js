function sortArr(input) {
  let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
  return sorted.join("\n");
}
console.log(sortArr(["alpha", "beta", "gamma", "pr"]));
