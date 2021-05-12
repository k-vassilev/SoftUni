function deleteByEmail() {
  let input = document.querySelector(`input[name="email"]`).value; // gets the field by name
  let table = Array.from(document.querySelectorAll(`tbody tr td:nth-child(2)`)); // gets the 2nd child of the td (2nd td)
  let resultDiv = document.querySelector(`#result`);

  for (let td of table) {
    let currentTd = td.textContent;
    if (currentTd == input) {
      td.parentElement.remove(); //removes the parent element
      resultDiv.textContent = "Deleted.";
    } else {
      resultDiv.textContent = "Not found.";
    }
  }
}
