function solve(arr) {
  let list = {
    VIP: [],
    regular: [],
  };
  let name = arr.shift();
  while (name !== `PARTY`) {
    let check = name[0];
    if (isNaN(check)) {
      list["regular"].push(name);
    } else {
      list["VIP"].push(name);
    }
    name = arr.shift();
  }
  for (let element of arr) {
    if (list["VIP"].includes(element)) {
      let i = list["VIP"].indexOf(element);
      list["VIP"].splice(i, 1);
    } else if (list["regular"].includes(element)) {
      let i = list["regular"].indexOf(element);
      list["regular"].splice(i, 1);
    }
  }
  console.log(list["VIP"].length + list["regular"].length);
  console.log(list["VIP"].join("\n"));
  console.log(list["regular"].join("\n"));
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
