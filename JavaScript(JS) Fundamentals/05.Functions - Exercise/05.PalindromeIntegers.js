function palindromeInt(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i].toString();
    //console.log(element);
    let newArr = [];
    for (let j = element.length; j >= 0; j--) {
      let toStr = element.charAt(j);
      newArr.push(Number(toStr));
      //console.log(toStr);
    }
    newArr.shift();
    let result = newArr.join("");
    //console.log(result);
    let original = arr[i];
    //console.log(original);
    if (result == original) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}

palindromeInt([123, 323, 421, 121]);
