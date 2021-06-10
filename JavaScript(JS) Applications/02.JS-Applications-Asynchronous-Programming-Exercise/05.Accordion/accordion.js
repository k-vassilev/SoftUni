function solution() {
  async function getInfo() {
    const mainDiv = document.querySelector("#main");

    const titleUrl = "http://localhost:3030/jsonstore/advanced/articles/list";
    const titleResponse = await fetch(titleUrl);
    const titleData = await titleResponse.json();

    const contentUrl = "http://localhost:3030/jsonstore/advanced/articles/details/";
    const contentResponse = await fetch(contentUrl);
    const contentData = await contentResponse.json();
    const contentArr = Object.values(contentData);

    titleData.forEach((x) => {
      const btnId = x._id;
      const articleTitle = x.title;

      const newAccordion = createEl("div", "", "accordion");
      mainDiv.appendChild(newAccordion);

      const newHead = createEl("div", "", "head");
      newAccordion.appendChild(newHead);

      const newTitleSpan = createEl("span", articleTitle);
      newHead.appendChild(newTitleSpan);

      const btn = createEl("button", "More", "button");
      btn.setAttribute("id", btnId);
      newHead.appendChild(btn);
      btn.addEventListener("click", onClick);

      const extraDiv = createEl("div", "", "extra");
      newAccordion.appendChild(extraDiv);

      let newContent = "";

      contentArr.forEach((y) => {
        if (btnId == y._id) {
          newContent = y.content;
        }
      });

      const p = createEl("p", newContent);
      extraDiv.appendChild(p);

      function onClick(e) {
        if (extraDiv.style.display != "block") {
          extraDiv.style.display = "block";
          btn.textContent = "Less";
        } else {
          extraDiv.style.display = "none";
          btn.textContent = "More";
        }
      }
    });
  }
  getInfo();
}
solution();

function createEl(type, textContent, className) {
  let element = document.createElement(type);
  if (textContent) {
    element.textContent = textContent;
  }
  if (className) {
    element.className = className;
  }
  return element;
}
