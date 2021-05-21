function addItem() {
  let textInput = document.querySelector("#newItemText").value;
  let valueInput = document.querySelector("#newItemValue").value;
  let selectMenu = document.querySelector("#menu");
  let option = document.createElement("option");
  option.textContent = textInput;
  option.value = valueInput;
  selectMenu.appendChild(option);
  document.querySelector("#newItemText").value = "";
  document.querySelector("#newItemValue").value = "";
}
