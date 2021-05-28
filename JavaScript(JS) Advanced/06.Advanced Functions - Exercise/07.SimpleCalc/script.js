function solve() {
  let num1;
  let num2;
  let result;

  function init(selector1, selector2, resultSelector) {
    num1 = document.querySelector(selector1);
    num2 = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
    
  }
  function add() {
    result.value = Number(num1.value) + Number(num2.value);
  }
  function subtract() {
    result.value = Number(num1.value) - Number(num2.value);
  }
  return {
    init,
    add,
    subtract,
  };
}



//---------------------------------------------------------------

function solution () {
    // initializing them here allows for usage of closure in the returned object
    let firstValue;
    let secondValue;
    let resultValue;
 //return object with metods, a.k.a functions inside
    return {
        // the selectors are already defined outside this JS code, we just use them
        init(selector1,selector2,resultSelector) {
           firstValue = document.querySelector(selector1)
           secondValue=document.querySelector(selector2)
           resultValue=document.querySelector(resultSelector)
    
        },
        add() {
            resultValue.value = Number(firstValue.value) + Number(secondValue.value)
        },
        subtract() {
            resultValue.value = Number(firstValue.value) - Number(secondValue.value)
        }
    }
}
