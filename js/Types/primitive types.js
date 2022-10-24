//  every one say everything is a object 
// ?but false is not an object .it is value of not object
// this are the primitive types
// undefined 
// String
// Number
// Boolean ----- object values not a an object
// Object
// null 
// BigInt
// these are objects
// objects
// functions
// array



// for example :- Number

var a = 15 ;

console.log(typeof a );

// for example:- string

var b = "15";

console.log(typeof b);

// for example :- boolean 

var c = true;
console.log(typeof c);

// for example:- null

var d = null ;  // null is the absence of value
console.log(typeof d);

// for example :- undefined

var e =  undefined; // value is not defined
var f ;         // it is an example of undefined
console.log(typeof e);
console.log(typeof f);

// for example:- big integer

var g = 12n;
console.log(typeof g);


// non primtives 

//  for example:- array

var array = [1,2,3];
console.log(typeof array);

var array1 = new Array(4,5,6); // we can create array in this type to by using new keyword
console.log(array1 +" " + typeof array1);

//for example :-  object

var object = {
    name: "kyle simpson",
    course: "deep javascript"
}
console.log(object);
console.log(typeof object )

var object1 = new Object();
object1.name = "yaseen"
object1.age = "21";

console.log(object1);
console.log(typeof object1);

//  also we can create object using function with this keyword

function object3(name,age){
this.name = name;
this.age = age;
}
s = new object3("sdf", 34);
console.log(typeof s)


// for example :- function 

function myfunc(){
    var name  = "oden";
    console.log(name);

}
myfunc();
console.log(typeof myfunc)