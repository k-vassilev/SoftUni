function focus() {
  console.log("TODO:...");
  let input = Array.from(document.querySelectorAll(`input`)); // makes an array from all input elements
  for (let el of input) { // adds event listeneres to each element of the array
    el.addEventListener("focus", onFocus); // gets the name of the listener (focus) then the function without params
    el.addEventListener("blur", onBlur);
  }
  function onFocus(ev) { //the actual function on focus
    ev.target.parentNode.className = `focused`; 
    // targets the parent Node of the current element and adds the `focused` class
  }
  function onBlur(ev) {
    ev.target.parentNode.className = ``;
    // targets the parent Node of the current element and changes the current class to an empty string ("")
  }
}



// function focus() {
//     // select all input fields and add a listener to each one to check if focused
//     let inputFields = Array.from(document.getElementsByTagName('input')).forEach(input => {
//         input.addEventListener('focus', onFocus)
//         input.addEventListener('blur', onBlur)
//     })
//     // for focus and blur, select the field's parent and attach class to it
//     function onFocus(ev) {
//         //ev.target is the input, it's parentNode is the div
//        ev.target.parentNode.className = 'focused'

//     }

//     function onBlur(ev) {
//         ev.target.parentNode.className = ''
//     }
// }
