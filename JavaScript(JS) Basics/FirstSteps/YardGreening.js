function greening(m2) {
  let price = Number(m2) * 7.61;
  let discount = 0.18 * price;
  let discountedPrice = price - discount;

  console.log(`The final price is: ${discountedPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

greening("550");
