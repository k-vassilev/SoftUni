function solve() {
    class Person {
      constructor(name, email) {
        this.name = name;
        this.email = email;
      }
      toString(){
          return  `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
      }
    }
    class Teacher extends Person {
      constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
      }
      toString() {
        return `${super.toString().slice(0,-1)}, subject: ${this.subject})` // super.toString() calls everything from the inherited toString
        // slice(0,-1) gets rid of a ")" at the end so it can be added with the subject
    }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;

        }
        toString() {
            return `${super.toString().slice(0,-1)}, course: ${this.course})` // super.toString() calls everything from the inherited toString
            // slice(0,-1) gets rid of a ")" at the end so it can be added with the subject
        }
    }
    return {
      Person,
      Teacher,
      Student
    };
  }


  
