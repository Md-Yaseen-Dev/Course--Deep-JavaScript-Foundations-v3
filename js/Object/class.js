// classes are templeate for creating objects. They encapsulate data with code to work on that DOMMatrixReadOnly. Classes in js  are buit on protypes but also have some syntax and semantics that are not shared with Es-5 class like semaantics

// classes are of two components
// they are 1) class declaration  2) class expression

// class declaration :- One way to define a class is using a class decalration. To declare a class, you can use the class keyword with the name of the class


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  
//   Class expression :- A class expression is another way to define a class. class expression can be named or unnamed. The name given to a named class expression is local to the class body. However it can be accessed via the name property.


// unnamed
let Rectangle1= class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle1.name);
  // output: "Rectangle"

  // named
Rectangle2 = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle2.name);
  // output: "Rectangle2"
  
  

// Kyle simpson class

class workshop{
    constructor(teacher){
        this.teacher = teacher;
        this.ask = question => {
            console.log(this.teacher,question);
        };
    }
}

var deepjs = new workshop('kyle');

setTimeout(deepjs.ask,"Is'this' fixed?")

// the new keyword
// - create a new empty object {}
// - sets the value of this to be the new empty object
//  -calls the constructor method

class user {
  constructor(){
    this.email = "ysnt0@gmail.com";
    this.name = "yaseen"
  }
}
var user1 = new user();
console.log(user1);

// object is like blueprint
// class is extra  work

// another example of class 

class bike{
  constructor(name,model,color){
   this.name = name,
   this.model = model,
   this.color = color
   class Num extends bike{
      super(number)
      // this.number = number; }
  }
}
};

 var company = new Num(12,"Yamaha","Rx100","red");
 console.log(company);

num =10;
console.log(num);
// var num ;


// this is own example

class Person {
  constructor(name) {
      this.name = name;
  }

  sayName() {
      console.log(`My name is ${this.name}`);
  }
}

class Student  {
  constructor(name, school) {
      // super(name);
      this.school = school;
  }

  saySchool() {
      console.log(`I go to ${this.school}`);
  }
}
// ----- without extend class we get eror to student class we cannot access with the same, and it will be more code
let john = new Person("John", "MIT");
john.sayName(); // "My name is John"
// john.saySchool(); // "I go to MIT"

class Student1 extends Person {

  // we use super constructor to use another this 


  constructor(name,school ,teacher) {
      super(name);
      this.school = school;
      this.teacher =teacher;
  }

  saySchool() {
      console.log(`I go to ${this.school}`);
      console.log(`World best tutor ${this.teacher}`);

  }
}

let john1 = new Student1("Johnnny", "MIT", "kyle");
john1.sayName();
john1.saySchool();

