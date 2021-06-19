import { html, render } from "../node_modules/lit-html/lit-html.js";

const listTemplate = (data) => html`
  <ul>
    ${data.map((t) => html`<li>${t}</li>`)}
  </ul>
`;

const loadBtn = document.querySelector("#btnLoadTowns");
loadBtn.addEventListener("click", onClick);

const inputField = document.querySelector("#towns");
const mainBody = document.querySelector("#root");

function onClick(ev) {
  ev.preventDefault();
  const inputData = inputField.value;
  const citiesArr = inputData.split(',');
  
  render(listTemplate(citiesArr), mainBody);
  inputField.value = "";
}
