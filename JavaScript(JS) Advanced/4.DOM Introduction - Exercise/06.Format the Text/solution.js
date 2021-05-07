// function solve() {
//   //TODO
//   let input = document.querySelector(`#input`).value;
//   let resultField = document.querySelector(`#output`);
//   let sentences = input.split(`. `);
//   let counter = 0;

//   for (let i = 0; i < sentences.length; i += 3) {
//     let paragraph = [];
//     for (let l = i; l < i + 3; l++) {
//       let sentence = sentences[l];
//       if (sentence) {
//           paragraph.push(`${sentence}.`);
//       }
//     }
//     let threeSentences = `${paragraph.join(".")}`;
//     let para = document.createElement(`P`);
//     para.innerHTML = threeSentences;
//     document.querySelector(`#output`).appendChild(para);
//   }
// }

//-------------------------------------------------------------

function solve() {
  let inputText = document.getElementById('input').value;
  let sentenceList = Array.from(inputText.split("."))
  let trial = []
  while(sentenceList.length>=3 && sentenceList.length!=0) {
    if (sentenceList[0]=="") {
      break;
    }
      trial = sentenceList.splice(0,3).filter(x => x!="")
      let paragraph = document.createElement("P")
      paragraph.textContent = trial.join(".")
       document.getElementById('output').appendChild(paragraph) 
    }
    if (sentenceList.length < 3 && sentenceList[0]!="" && sentenceList.length !=0) {
      let paragraph = document.createElement("P")
      paragraph.textContent = sentenceList.join(".")
       document.getElementById('output').appendChild(paragraph) 
    }
  }
