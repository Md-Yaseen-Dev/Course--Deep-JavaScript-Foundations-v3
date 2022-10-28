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

console.log(prototype)