// classes are templeate for creating objects. They encapsulate data with code to work on that DOMMatrixReadOnly. Classes in js  are buit on protypes but also have some syntax and semantics that are not shared with Es-5 class like semaantics

// classes are of two components
// they are 1) class declaration  2) class expression

// class declaration :- One way to define a class is using a class decalration. To declare a class, you can use the calss keyword with the name of the class


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  
//   Class expression :- A class expression is another way to define a class. class expression can be named or unnamed. The naem given to a named class expression is local to the class body. However it can be accessed via the name property.


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
Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
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

setTimeout(deepjs.ask,100,"Is'this' fixed?")

// the new keyword
// - create a new empty object {}
// - sets tthe value of this to be the new empty object
//  -calls the constructir method

class user {
  constructor(){
    this.email = "ysnt0@gmail.com";
    this.name = "yaseen"
  }
}
var user1 =new user();
console.log(user1);

// object is like blueprint
// class is extra  work