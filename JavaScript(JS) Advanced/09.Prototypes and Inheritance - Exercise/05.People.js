function result() {
  class Employee {
    constructor(name, age) {
      if (new.target === Employee) {
        throw new Error(`Cannot Instantiate directly.`);
      }
      this.name = name;
      this.age = Number(age);
      this.salary = 0;
      this.tasks = [];
    }
    work() {
      let currentTask = this.tasks.shift();
      console.log(this.name + currentTask);
      this.tasks.push(currentTask);
    }
    collectSalary() {
      console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
    getSalary() {
      return this.salary;
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(` is working on a complicated task.`);
      this.tasks.push(` is taking time off work.`);
      this.tasks.push(` is supervising junior workers.`);
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(` scheduled a meeting.`);
      this.tasks.push(` is preparing a quarterly report.`);
    }
    getSalary() {
      return this.salary + this.dividend;
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(` is working on a simple task.`);
    }
  }
  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}


let solve = result();

let guy1 = new solve.Junior('dragan', 23);
console.log(guy1)


guy1.work()
guy1.work()
guy1.work()
guy1.work()



//-------------------------------------------

function solve () {

    let tasks = {
        'Junior' : [' is working on a simple task.',],
            'Senior': [' is working on a complicated task.',
                       ' is taking time off work.',
                    ' is supervising junior workers.'],
                'Manager': [' scheduled a meeting.',
                ' is preparing a quarterly report.']

    }
    class Employee{
        constructor(name,age) {
            this.name = name;
            this.age = age;
            this.salary = 0
            this.tasks = []
        }
        work () {
            let currentTask = this.tasks.shift()
           console.log(`${this.name}${currentTask}`)
           this.tasks.push(currentTask)
        }
        collectSalary () {
            console.log(`${this.name} received ${this.salary} this month.`)
        }

    }
    class Junior extends Employee{
        constructor(name,age) {
            super(name,age)
            this.tasks = tasks.Junior
        }
    }
    class Senior extends Employee{
        constructor(name,age) {
            super(name,age)
            this.tasks = tasks.Senior
        }
    }
    class Manager extends Employee{
        constructor(name,age) {
            super(name,age)
            this.dividend = 0
            this.tasks = tasks.Manager
        }
        collectSalary () {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)
        }

    }




    return {Employee,Junior,Senior,Manager}
}
