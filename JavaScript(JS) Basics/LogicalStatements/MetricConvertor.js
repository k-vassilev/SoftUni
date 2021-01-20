function solve(num, input, output) {
  num = Number(num);

  if (input === `mm` && output === `cm`) {
    console.log((num / 10).toFixed(3));
  } else if (input === `mm` && output === `m`) {
    console.log((num / 1000).toFixed(3));
  }

  if (input === `cm` && output === `mm`) {
    console.log((num * 10).toFixed(3));
  } else if (input === `cm` && output === "m") {
    console.log((num / 100).toFixed(3));
  }

  if (input === `m` && output === `mm`) {
    console.log((num * 1000).toFixed(3));
  } else if (input === `m` && output === `cm`) {
    console.log((num * 100).toFixed(3));
  }
}
solve("12", "mm", "m");
