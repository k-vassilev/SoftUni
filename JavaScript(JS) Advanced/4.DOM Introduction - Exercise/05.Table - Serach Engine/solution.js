function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let table = document.querySelectorAll(`tbody tr`); //tbody tr td
    let input = document.querySelector(`#searchField`);

    for (let i = 0; i < table.length; i++) {
      cell = table[i];
      if (cell.textContent.toLowerCase().includes(input.value.toLowerCase())) {
        cell.classList.add("select");
      } else {
        cell.classList.remove("select");
      }
    }
  }
}
