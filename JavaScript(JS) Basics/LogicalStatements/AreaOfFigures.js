function solve(kind, a, b) {
  a = Number(a);
  b = Number(b);

  if (kind === `square`) {
    console.log((a * a).toFixed(3));
  } else if (kind === `rectangle`) {
    console.log((a * b).toFixed(3));
  } else if (kind === `circle`) {
    console.log((Math.PI * Math.pow(a, 2)).toFixed(3));
  } else if (kind === `triangle`) {
    console.log(((a * b) / 2).toFixed(3));
  }
}
