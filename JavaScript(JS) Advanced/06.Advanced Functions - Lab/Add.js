function solution (num) {
    // defining the solution function with parameter - a number (5)
    return function (numTwo) {
        // the anonimous function get whatever function name is given as console.log value
        return num + numTwo
        // returns the value of an anonimous function + the original number
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
