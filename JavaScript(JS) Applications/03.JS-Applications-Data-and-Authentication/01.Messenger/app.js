function attachEvents() {
  const msgArea = document.querySelector("#messages");
  const [nameInput, msgInput] = document.querySelectorAll("input");
  const sendBtn = document.querySelector("#submit");
  sendBtn.addEventListener('click', onSend);
  const refreshBtn = document.querySelector("#refresh");
  refreshBtn.addEventListener("click", onClick);

  msgArea.value = "";
  getMsg();

  async function getMsg() {
    const url = "http://localhost:3030/jsonstore/messenger";
    const response = await fetch(url);
    const data = await response.json();
    const dataValues = Object.values(data);
    dataValues.forEach((x) => {
      msgArea.value += `${x.author}: ${x.content}` + "\n";
    });
  }

  async function postMsg(message){
      const response = await fetch('http://localhost:3030/jsonstore/messenger', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
      });

  }

  function onClick(e) {
    e.preventDefault();
    msgArea.value = "";
    getMsg();
  }

  function onSend(e){
    let author = nameInput.value;
    let content = msgInput.value;
    postMsg({author, content});
    msgArea.value = "";
    nameInput.value ='';
    msgInput.value ='';
    getMsg();
  }
}

attachEvents();
