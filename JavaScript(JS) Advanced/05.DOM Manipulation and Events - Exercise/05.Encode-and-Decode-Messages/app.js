function encodeAndDecodeMessages() {
  let areas = Array.from(document.querySelectorAll("textarea"));
  let originalMsg = areas[0];
  let resultMsg = areas[1];
  let buttons = Array.from(document.querySelectorAll(`button`));
  let encodingBtn = buttons[0];
  let decodingBtn = buttons[1];
  encodingBtn.addEventListener("click", encodeMsg);
  decodingBtn.addEventListener("click", decodedMsg);
  let textToEncode;
  let textToDecode;

  function encodeMsg(e) {
    textToEncode = originalMsg.value;
    let encodingArr = [];
    for (const char of textToEncode) {
      let enc = char.charCodeAt();
      enc += 1;
      encoded = String.fromCharCode(enc);
      encodingArr.push(encoded);
    }
    resultMsg.value = encodingArr.join("");
    originalMsg.value = "";
  }
  function decodedMsg(e) {
    textToDecode = resultMsg.value;
    let decodingArr = [];
    for (const char of textToDecode) {
      let enc = char.charCodeAt();
      enc -= 1;
      encoded = String.fromCharCode(enc);
      decodingArr.push(encoded);
    }
    resultMsg.value = decodingArr.join("");
  }
}
