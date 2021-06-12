function attachEvents() {
    const loadBtn = document.querySelector(`#btnLoad`);
    loadBtn.addEventListener('click', onLoad);

    const createBtn = document.querySelector('#btnCreate');
    createBtn.addEventListener('click', onCreate);

    const ul = document.querySelector('#phonebook')
    const [pName, pPhone] = document.querySelectorAll(`input`);

    async function loadContacts(){
        const url = 'http://localhost:3030/jsonstore/phonebook';
        const response = await fetch(url);
        const data = await response.json();
        ul.innerHTML = "";
        for (const id in data) {
            const contact = createEl('li',`${data[id].person}:${data[id].phone}`);
            ul.appendChild(contact);
            const delBtn = createEl('button','Delete');
            delBtn.setAttribute("value", id);
            contact.appendChild(delBtn);
            delBtn.addEventListener('click', onDelete)
        }
    }

    async function postContacts(contactInfo){
        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contactInfo)
      });
      
      loadContacts();

    }

    async function onDelete(e) {
        let contactId = e.target.value;
        const delResponse = await fetch('http://localhost:3030/jsonstore/phonebook/'+ contactId,{
        method: 'delete'})
        e.target.parentNode.remove();
    }

    function onLoad(e){
        ul.innerHTML = "";
        loadContacts()
    }
 
    function onCreate(e){
        const person = pName.value;
        const phone = pPhone.value
        postContacts({person,phone})
        ul.innerHTML = "";
        pName.value = "";
        pPhone.value = "";
        loadContacts();
    }
}
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

attachEvents();
