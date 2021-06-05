class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }
    increase(length) {
        if(length < 0){
            length = 0;
        }
        this.innerLength += Number(length);
    }
    decrease(length){
        this.innerLength -= Number(length);
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }
    toString(){
        let startLength = this.innerString.length;
        let lengthToCut = startLength - this.innerLength
        if(startLength > this.innerLength){
            return this.innerString.slice(0, -lengthToCut) + `...`
        }else{
            return this.innerString
        }
        
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
