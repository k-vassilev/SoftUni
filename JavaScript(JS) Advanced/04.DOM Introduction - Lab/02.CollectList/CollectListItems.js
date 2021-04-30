function extractText() {
  let itemNodes = document.querySelectorAll("ul#items li");
  let textArea = document.querySelector("#result"); // get content by id;
  for (let node of itemNodes) {
    textArea.value += node.textContent + "\n"; //.textContent gets the text from an HTML object
  }
}
