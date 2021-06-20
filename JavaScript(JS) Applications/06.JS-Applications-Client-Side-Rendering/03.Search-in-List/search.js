import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsDiv = document.querySelector('#towns');
const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', onSearch);
const inputField = document.querySelector('#searchText');
const result = document.querySelector('#result');

const cityTemplate = (data) => html`
  <ul>
    ${data.map((t) => html`<li>${t}</li>`)}
  </ul>
`;
render(cityTemplate(towns), townsDiv);

function onSearch(ev) {
   ev.preventDefault();
   let activeCounter = 0;
   let townsList = document.querySelectorAll('li');
   townsList.forEach((t) => t.classList.remove("active"));
   townsList.forEach((t) => {
      if(t.textContent.toLocaleLowerCase().includes(inputField.value.toLocaleLowerCase())){
         t.classList.add("active");
         activeCounter++;
      }
   });
   result.innerHTML = "";
   const resultCounter = document.createElement('p');
   resultCounter.textContent = `${activeCounter} matches found`;
   result.appendChild(resultCounter);
}
