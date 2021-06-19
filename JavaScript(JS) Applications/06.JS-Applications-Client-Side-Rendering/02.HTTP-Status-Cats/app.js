import { html, render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const catsSection = document.querySelector("#allCats");

const catTemplate = (data) => html`
  <ul>
    ${data.map(
      (cat) => html`<li>
        <img
          src="./images/${cat.imageLocation}.jpg"
          width="250"
          height="250"
          alt="Card image cap"
        />
        <div class="info">
          <button class="showBtn">Show status code</button>
          <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
          </div>
        </div>
      </li>`
    )}
  </ul>
`;

render(catTemplate(cats), catsSection);

const showBtns = document.querySelectorAll(".showBtn");
showBtns.forEach((b) => b.addEventListener("click", toggleInfo));

function toggleInfo(e) {
  e.preventDefault();
  let parentDiv = e.target.parentNode;
  let target = parentDiv.querySelector("div:nth-child(2)");
  if (target.style.display != "block") {
    target.style.display = "block";
    parentDiv.parentNode.querySelector("button").textContent =
      "Hide status code";
  } else {
    target.style.display = "none";
    parentDiv.parentNode.querySelector("button").textContent =
      "Show status code";
  }
}
