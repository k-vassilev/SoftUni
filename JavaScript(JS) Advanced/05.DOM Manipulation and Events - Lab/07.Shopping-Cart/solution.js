function solve() {
  let buttons = Array.from(document.querySelectorAll(`.add-product`));
  // makes an array of all matching buttons
  let resultDiv = document.querySelector(`textarea`);
  // gets the result div
  let checkOutBtn = document.querySelector(`.checkout`);
  // get the checkout button
  checkOutBtn.addEventListener("click", onCheckOut);
  // adds event on checkout button
  for (let button of buttons) {
    button.addEventListener("click", onClick);
    // adds events to all buttons
  }
  let allProducts = [];
  // keeps all the unique bought products.
  let totalPrice = 0;
  // keeps the totalPrice up to checkout.

  function onClick(ev) {
    let product = ev.target.parentNode.parentNode;
    // gets the parent node of the target - the whole product element
    let productName = product.querySelector(`.product-title`).textContent;
    // gets the name of the product
    let productPrice = product.querySelector(`.product-line-price`).textContent;
    // gets the price of the product
    let orderLine = `Added ${productName} for ${productPrice} to the cart.\n`;
    // gets the text for the row
    resultDiv.textContent += orderLine;
    // adds the text to the result area
    totalPrice += Number(productPrice);
    // increases the total price with the current product price
    if (!allProducts.includes(productName)) {
      allProducts.push(productName);
      //checks if the product has already been bought and if not adds it to the allProducts array
    }
  }
  function onCheckOut(ev) {
    resultDiv.textContent += `You bought ${allProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    for (let button of buttons) {
      button.removeEventListener("click", onClick);
    }
    checkOutBtn.removeEventListener("click", onCheckOut);
    // removes the listeners
  }
}

//------------------------------------------------------------------------------------------------------

function solve() {
   let buttonCollection = Array.from(document.querySelectorAll('.add-product')).forEach (btn => {
      btn.addEventListener('click', onClick)
   })
   // empty string for result text + get the area where it will be displayed
   let boughtItem = ''
   let result = document.querySelector('textarea')
   let items = {}

   function onClick (ev) {
      //get the parent div so information about product can be extracted
    let parentDiv=  ev.target.parentNode.parentNode
    // get the product name and price
    let name = parentDiv.querySelector('.product-title').textContent
    let price = Number(parentDiv.querySelector('.product-line-price').textContent)
    // add product and price to object.
      
    if (items[name]==undefined) {
       items[name] = price
    } else {
       // - to avoid duplicates, when product is already in object, just add the price
       let currentPrice = items[name];
       currentPrice+=price;
       items[name] = currentPrice
    }
   // create a result string for each bought item to display into the text area
    boughtItem = `Added ${name} for ${price.toFixed(2)} to the cart.`
    result.value+=boughtItem + `\n`
   }
   
   // check-out functionality, apply listener to checkout button
   let checkoutBtn = document.querySelector('.checkout')
   checkoutBtn.addEventListener('click', CheckOut)

   function CheckOut (ev) {
       // get keys from object to display them as "bought"
      let keys = Object.keys(items)
      // get values a.k.a prices - use reduce to sum them all
      // - reduce (accumulator, every other price) => sum them, start acc at 0
      let values = Object.values(items).reduce((acc,c) => acc+c,0)
      // shove it all into a result string and display it in textarea
      let all = `You bought ${keys.join(", ")} for ${values.toFixed(2)}.`
      result.value+=all
      //remove listeners
      Array.from(document.querySelectorAll('.add-product')).forEach (btn => {
         btn.removeEventListener('click', onClick)
      })
      checkoutBtn.removeEventListener('click', CheckOut)
   }

}
