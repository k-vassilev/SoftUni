function toggle() {
  console.log("TODO:...");
  let showMore = document.querySelector(`#extra`);
  let button = document.querySelector(`.button`);
  showMore.style.display = showMore.style.display !== `block` ? `block` : `none`;
  button.textContent = button.textContent !== `More` ? `More` : `Less`;
}
