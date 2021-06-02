function notify(message) {
  let div = document.querySelector(`#notification`);
  div.textContent = "Something happened!";
  div.style.display = "block";
  div.addEventListener("click", onClick);

  function onClick(e) {
    e.target.style.display = "none";
  }
}
