function listOfProducts(arr) {
  let sorted = arr.sort();
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    let place = index + 1;
    console.log(`${place}.${element}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
