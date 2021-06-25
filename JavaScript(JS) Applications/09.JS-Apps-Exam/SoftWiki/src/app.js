import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import {homePage} from './views/home.js'
import {loginPage} from './views/login.js'
import {registerPage} from './views/register.js'
import {logout as apiLogout} from './api/data.js'
import {catalogPage} from './views/catalog.js'
import {createPage} from './views/create.js'
import {detailsPage} from './views/details.js'
import {editPage} from './views/edit.js'
import {searchPage} from './views/search.js'


const main = document.querySelector('#main-content');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/catalog', decorateContext, catalogPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/search', decorateContext, searchPage);

page.start();

function decorateContext(ctx, next){
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}


function setUserNav(){
    const token = sessionStorage.getItem(`authToken`);
    if(token != null){
        document.querySelector('#user').style.display='';
        document.querySelector('#guest').style.display='none';
    }else{
        document.querySelector('#user').style.display='none';
        document.querySelector('#guest').style.display='';
    }
}

async function logout(){
    await apiLogout();
    setUserNav();
    page.redirect('/');
}



