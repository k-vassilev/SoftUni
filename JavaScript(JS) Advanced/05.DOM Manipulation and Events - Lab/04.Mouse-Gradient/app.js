function attachGradientEvents() {
  let gradient = document.querySelector(`#gradient`);
  gradient.addEventListener("mousemove", gradientMove);
  gradient.addEventListener("mouseout", gradientOut);

  function gradientMove(event) {
    let power = event.offsetX / (event.target.clientWidth - 1);
    power = Math.trunc(power * 100);
    let result = document.querySelector(`#result`);
    result.textContent = `${power}%`;
  }
  function gradientOut(event) {
    document.querySelector(`#result`).textContent = ``;
  }
}
