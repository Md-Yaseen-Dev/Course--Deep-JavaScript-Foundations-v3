var x = 10;
 var b =x.toString();
 console.log(b);
 console.log(typeof b);

 // Tostring  -- function for the conversion of an object to its corresponding value.

 const num  = new Number(34);
 console.log(num.toString());
 console.log(typeof num);


//  Overriding the default tostring() method


function myobj(name,age){
    this.name = name;
    this.age = age;
}
const obj = new myobj('roshan',21);

myobj.prototype.toString =function fun() {
    return this.name + this.age 
}
console.log(obj.toString())