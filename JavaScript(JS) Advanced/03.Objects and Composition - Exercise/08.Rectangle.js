function rectangle(width, height, color) {
  function capitalize(word) {
    let capitalColor = color[0].toUpperCase();
    let secondPart = color.slice(1);
    let colorResult = capitalColor + secondPart;
    return colorResult;
  }

  function calcArea() {
    return this.width * this.height;
  }

  return {
    width,
    height,
    color: capitalize(color),
    calcArea,
  };
}
//Input below
let rect = rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
