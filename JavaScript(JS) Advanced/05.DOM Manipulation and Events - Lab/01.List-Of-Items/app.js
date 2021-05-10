function addItem() {
    console.log('TODO:...');
    let input = document.querySelector(`#newItemText`).value; // getting the input
    let li = document.createElement("li"); // creating 'li' element
    li.appendChild(document.createTextNode(input)); // connecting the input to li element
    document.querySelector(`#items`).appendChild(li); // connecting the new li element to the current div of li(s).
    document.querySelector(`#newItemText`).value = "";
}
