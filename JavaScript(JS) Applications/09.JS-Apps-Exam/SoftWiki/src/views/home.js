import { html } from "../../node_modules/lit-html/lit-html.js";
import { getHome } from "../api/data.js";

const homeTemplate = (JS, Java, C, Pyth) => html`
  <section id="home-page" class="content">
     <h1>Recent Articles</h1>
     <section class="recent js">
         <h2>JavaScript</h2>
         ${JS.length==0? html`<h3 class="no-articles">No articles yet</h3>` : JS.map(articleTemplate)}
     </section>
     <section class="recent csharp">
         <h2>C#</h2>
         ${C.length==0? html`<h3 class="no-articles">No articles yet</h3>` : C.map(articleTemplate)}
     </section>
     <section class="recent java">
         <h2>Java</h2>
         ${Java.length==0? html`<h3 class="no-articles">No articles yet</h3>` : Java.map(articleTemplate)}
     </section>
     <section class="recent python">
         <h2>Python</h2>
         ${Pyth.length==0? html`<h3 class="no-articles">No articles yet</h3>` : Pyth.map(articleTemplate)}
     </section>
</section>
`;
const articleTemplate = (article) => html`<article>
  <h3>${article.title}</h3>
  <p>${article.content}</p>
  <a href="/details/${article._id}" class="btn details-btn">Details</a>
</article>`;
export async function homePage(ctx) {
  const JS = [];
  const Java = [];
  const C = [];
  const Pyth = [];
  const categories = await getHome();
  categories.forEach((element) => {
    if (element.category == "JavaScript") {
      JS.push(element);
    } else if (element.category == "C#") {
      C.push(element);
    } else if (element.category == "Java") {
      Java.push(element);
    } else if (element.category == "Python") {
      Pyth.push(element);
    }
  });

  ctx.render(homeTemplate(JS, Java, C, Pyth));
}
