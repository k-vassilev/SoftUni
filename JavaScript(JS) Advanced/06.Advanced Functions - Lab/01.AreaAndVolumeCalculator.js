function solve(area, vol, input) {
  let objects = JSON.parse(input);
  //turns the string input to object;

  function calc(obj) {
    let areaObj = area.call(obj);
    // the area function returns the logic, the .call on obj will point this to the given input
    let volumeObj = vol.call(obj);
    // the area function returns the logic, the .call on obj will point this to the given input
    return { area: areaObj, volume: volumeObj };
    // returning object with the results of the given outside functions
  }
  return objects.map(calc);
  // .map executes the calc function for all key - value pairs in the object(the parsed input)
}
console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`
    ))
function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
