function getFibonator() {
    let num1 = 0;
    let num2 = 1;

    return function f() {
        result = num1 + num2;
        num2 = num1
        num1 = result
        return result
    }
}


let fib = getFibonator();
let fib2 = getFibonator();
console.log(fib2()); // 1
console.log(fib2()); // 1
console.log(fib2()); // 2
console.log(fib2()); // 3
console.log(fib2()); // 5
console.log(fib2()); // 8
console.log(fib2()); // 13
