import {html} from '../../node_modules/lit-html/lit-html.js'
import {search} from '../api/data.js'

const searchTemplate = (articles,onSearch,searchParam) => html` <section id="search-page" class="content">
<h1>Search</h1>
<form id="search-form">
    <p class="field search">
        <input id="queryText" type="text" placeholder="Search by article title" name="search" .value=${searchParam || ''}>
    </p>
    <p class="field submit">
        <input @click=${onSearch} class="btn submit" type="submit" value="Search">
    </p>
</form>
<div class="search-container">
${articles.length==0? html `<h3 class="no-articles">No matching articles</h3>`: articles.map(articleTemplate)}
</div>
</section>
</div>`

const articleTemplate = (article) => html `<a class="article-preview" href="/details/${article._id}">
<article>
    <h3>Topic: <span>${article.title}</span></h3>
    <p>Category: <span>${article.category}</span></p>
</article>
</a>`
export async function searchPage(ctx) {
    const searchParam = ctx.querystring.split('=')[1]
    const articles = searchParam ? await search(searchParam) : ''
    ctx.render(searchTemplate(articles,onSearch,searchParam))

    function onSearch() {
        const query = document.getElementById('queryText').value
        ctx.page.redirect('/search/?query=$' + query)
    }
}