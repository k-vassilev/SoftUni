function validate() {
  let input = document.querySelector(`#email`);
  input.addEventListener(`change`, onChange);

  function onChange(ev) {
    let toMatch = /[a-z]+@[a-z]+\.[a-z]+/gm;
    if (input.value.match(toMatch)) {
      ev.target.className = ``;
    } else {
      ev.target.className = `error`;
    }
  }
}
