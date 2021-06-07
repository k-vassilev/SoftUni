(function () {
  String.prototype.ensureStart = function (str) {
    if (!this.includes(str)) {
      return str + this;
    } else {
      return this;
    }
  };
  String.prototype.ensureEnd = function (str) {
    if (!this.includes(str)) {
      return this + str;
    } else {
      return this;
    }
  };
  String.prototype.isEmpty = function () {
    if (this) {
      return true;
    } else {
      return false;
    }
  };
  String.prototype.truncate = function (n) {
    let words = this.split(" ");
    let sumOfLength = 0;
    let result = [];
    if(this.length < n){
        return this
    }else{
        for (const word of words) {
            if (sumOfLength + word.length <= n) {
              sumOfLength += word.length;
              result.push(word);
            }
          }
          return result.join(" ")
    }
    
    
  };
})();

let myStr = `hello my string`;
console.log(myStr.truncate(14));
