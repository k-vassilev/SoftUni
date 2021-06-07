function search() {
  let input = document.querySelector(`#searchText`).value;
  let list = document.querySelectorAll(`#towns>li`);
  let result = document.querySelector(`#result`);
  let underlined = 0;
  for (let li of list) {
    if (li.textContent.toLowerCase().includes(input.toLowerCase())) {
      li.style.fontWeight = `bold`;
      li.style.textDecoration = `underline`;
      underlined++;
    } else {
      li.style.fontWeight = ``;
      li.style.textDecoration = ``;
    }
  }
  result.textContent = `${Number(underlined)} matches found`;
}
