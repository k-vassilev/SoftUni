1. Exam project skeleton and files
2. Setup NPM project (package.json + libraries)
    -'npm init -y'
    -'npm install --save page lit-html'
    -'lite-server'
    - server start with 'node .\server.js' in server folder from terminal
3. Analyzie the HTML and determine templates
4. Configure routing with placeholder modules
    - new 'src' folder in main
        - new file 'app.js'
            - 'import page from '../node_modules/page/page.mjs';'
            - 'import * as api from './api/data.js';'
            - 'import { dashboardPage } from './views/dashboard.js';
            - 'import { detailsPage } from './views/details';
            - 'import { createPage } from './views/create.js';
            - 'import { editPage } from './views/edit.js';
            - 'import { registerPage } from './views/register.js';
            - 'import { loginPage } from './views/login.js';
            - 'import { myPage } from './views/myFurniture';
        - new folder 'api'
            - new file 'api.js'
            - new file 'data.js'
                - host is set here as: 'const host = 'http://localhost:3030';'
                - 'import * as api from './api.js';'
        - new folder 'views' (one file inside for each html template)
            - dashboard.js
                - 'import {html} from '../../node_modules/lit-html/lit-html.js''
                - 'export async function dashboardPage(ctx)'
            - login.js
                - 'export async function loginPage(ctx)'
            - register.js
                - 'export async function registerPage(ctx)'
            - details.js
                - 'export async function detailsPage(ctx)'
            - create.js
                - 'export async function createPage()'
            - edit.js
                - 'export async function editPage(ctx)'
            - myFurniture.js
                - 'export async function myPage(ctx)'
    - new 'sample' folder - move all html to it.
    - make new file 'index.html' ('!'+'enter') for heading
5. Implement requests
6. Implement each view
    6.1. Create static template
    6.2. Implement fetch requests
    6.3. Add parameters to templates
    6.4. Add event listeners (if any)
