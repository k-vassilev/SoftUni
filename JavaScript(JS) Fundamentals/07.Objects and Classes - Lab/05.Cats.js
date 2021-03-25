function cats(input) {
  class cats {
    constructor(catName, catAge) {
      this.catName = catName;
      this.catAge = catAge;
    }
    meow() {
      console.log(`${this.catName}, age ${this.catAge} says Meow`);
    }
  }

  for (let iterator of input) {
    // let name = iterator.split(` `);
    // console.log(`${name[0]}, age ${name[1]} says Meow`);
    let [name, age] = iterator.split(` `);
    let myNewCat = new cats(name, age);
    myNewCat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
