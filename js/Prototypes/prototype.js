//  A constructor call makes an object based on its own prototype

//  A constructor call makes an object linked to its own prototype.

// Protypes are the mechanism by which javascript objects inheritance from one another. in this article we explain what a prototype is  how prototype chains work and how a prototype for an object can be set.


//  for example The prototype chain

const object = {

city : "hyderabad",
greet(){
        console.log(this.city);
    },
};

object.greet();
const x = Object.getPrototypeOf(object);
console.log(x)
// object.hasOwnProperty();
// object.toString();

// this  is an object with one data property, city, and one method, greet(). if you type the object name followed by a period into the console like object. then the console will pop up a list of all the properties available at this object. you will see that as well as city and greet. there are lots of other properties.


//  in simpler object has own built property, which is also called as prototype.


// Note the property of an object that points to its prototype is not called prototype. its  name is not standard, but in practice all browsers use_proto_. The standard way to access an object's prototype is the object. getprototypeOf() method.


//  the built properties like array. length , object.toString(); it works form prototype.

// Prototype is just like mechanism of object

var arr = [1,2]

console.log(arr.length);

// here when you press array dot u get concat, push, pop, length, index these are called prototypes


// demonstrating purpose - actually we should not write this.
// we define prototype as _proto_ .

console.log(arr._proto_)//this is an array prototype
// arr._proto_._proto_ //this is  an object prototype

// arr._proto_._proto_._proto_ //this will be null

class obj{
    constructor(){

    } 
    fn(){}
}

console.log(new obj());

function obj1(){}
obj1.prototype.fn = function(){
    var a =10;
    console.log(a)
};
const a  = new obj1() 
console.log(a);
a.fn()
// let obj = {}
// obj.a = 1 ;

// we can use constructor property to create a new object using the same constructor as the existing one


function Rabbit(name){
    this.name = name ;
    console.log(name);
}
let rabbit = new Rabbit("white rabbit")
let rabbit1 = new rabbit.constructor("black rabbit")

class prototype{
    constructor(name){
        this.name = name;
    }
}

console.log(new prototype("Ben"))


//  create multiple objects 

// In javascript, multiple objects can be created in a constructor 

// constructor
function user(){
    this.name ="bell";
}
var user1 = new user();
var user2 = new user();
console.log(user1);
console.log(user2);
// in the above example, two objects are created using the same constructor

// constructor with parameters

// A constructor can alos have parameters

function user3(name,age){
    this.name = name;
    this.age = age;
}
var use = new user3('spike',24);
var use1 = new user3("alice",39);
console.log(use);
console.log(use1);

// here the above arguments are passed to the constructor during object creation. and it will have different instance objects.

// constructor vs object literal
// An object literal is typically used to create a single object whereas a constructor is useful for creating multiple objects.

// object literals
// an object literal is typically used to create a single object whereas a constructor is useful for creating multiple objects.

let objec = {
  name: "summy"
}

// constructor
function func(){
    this.name = "kyle";
}
var func1 = new func();
var func2 = new func();
console.log(func1);
console.log(func2);

// here objects literals have only one object. but constructor can create  multiple object using same constructor and it doesn't change in constructor object. but literal can change the original object.


// object prototype
// properties and methods can be added to a constructor using a prototype

function ob_pro(){
    this.name ="boss";
}

let ob_pro1 = new ob_pro();
let ob_pro2 = new ob_pro();

ob_pro.prototype.age = 25;
console.log(ob_pro1.age)
console.log(ob_pro2.age)


