class List {
  constructor() {
    this.array = [];
    this.size = Number(0);
  }

  add(value) {

    this.size ++;
    this.array.push(value);
    return this.array.sort((a,b) => a - b)
    
  }
  get(index) {
    if (index >= 0 && index < this.array.length) {
      return this.array[index];
    }
  }
  remove(index) {
    if (index >= 0 && index < this.array.length) {

      this.array.splice(index, 1);
      this.size --;
      return this.array.sort((a,b) => a - b);
    }
  }
 
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));


