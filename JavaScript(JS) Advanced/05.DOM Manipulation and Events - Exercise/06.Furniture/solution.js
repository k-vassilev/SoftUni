function solve() {
  let textAreas = Array.from(document.querySelectorAll(`textarea`));
  let input = textAreas[0];
  let buttons = Array.from(document.querySelectorAll(`button`));
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];
  generateBtn.addEventListener("click", onGenerate);
  buyBtn.addEventListener("click", onBuy);
  let table = document.querySelector("table>tbody");
  let textAreaResult = textAreas[1];

  function onGenerate(e) {
    let allInput = input.value;
    let parsedArr = JSON.parse(allInput);
    for (const item of parsedArr) {
      console.log(item);

      let tr = document.createElement("tr");
      table.appendChild(tr);

      let imgTd = document.createElement("td");
      let img = document.createElement("img");
      img.src = item.img;
      tr.appendChild(imgTd);
      imgTd.appendChild(img);

      let itemNameTd = document.createElement("td");
      let itemName = document.createElement("p");
      itemName.textContent = item.name;
      tr.appendChild(itemNameTd);
      itemNameTd.appendChild(itemName);

      let itemPriceTd = document.createElement("td");
      let itemPrice = document.createElement("p");
      itemPrice.textContent = item.price;
      tr.appendChild(itemPriceTd);
      itemPriceTd.appendChild(itemPrice);

      let decFactorTd = document.createElement("td");
      let decFactor = document.createElement("p");
      decFactor.textContent = item.decFactor;
      tr.appendChild(decFactorTd);
      decFactorTd.appendChild(decFactor);

      let checkBoxTd = document.createElement("td");
      let checkBox = document.createElement("INPUT");
      checkBox.setAttribute("type", "checkbox");
      tr.appendChild(checkBoxTd);
      checkBoxTd.appendChild(checkBox);
    }
  }
  function onBuy(e) {
    let boughtFurniture = [];
    let totalPrice = 0;
    let avgFactor = [];
    let allChecked = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    ).filter((x) => x.checked);
    for (const element of allChecked) {
      let parentTr = element.parentNode.parentNode;
      let boughtName = parentTr.children[1].textContent;
      let boughtPrice = Number(parentTr.children[2].textContent);
      let boughtFactor = Number(parentTr.children[3].textContent);
      boughtFurniture.push(boughtName);
      totalPrice += boughtPrice;
      avgFactor.push(boughtFactor);
    }
    let totalPriceString = `Total price: ${totalPrice.toFixed(2)}`;
    avgFactor = avgFactor.reduce((acc, c) => acc + c / avgFactor.length, 0);
    let avgFactorString = `Average decoration factor: ${avgFactor}`;
    textAreaResult.value = `Bought furniture: ${boughtFurniture.join(
      ", "
    )}\n${totalPriceString}\n${avgFactorString}`;
  }
}

