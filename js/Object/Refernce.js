// Object reference
//  A variable assigned to an object doesn't stores the object itself but its addressing memory

var obj1 = {
    a:20,b:30,
};
var obj2 = obj1;
console.log(obj2);
obj2.a =40;
console.log(obj1);

// HERE above the object values are changing it not copying the value

// non reference

var x = 10;
var temp = x;
console.log("Before assign: " + x);
console.log("temp value :" + temp)
var x = 20;
console.log("After Assign:" +  x);
console.log("After assign temp value :" + temp); // no changed because it is assigned before 20

// another example

var a = 10 ;
var b = 20;
var c = a ;
console.log(c);
var a = 20;
console.log(c);

//  with objects

var a = {
    value :25,
}
var b = a ;
console.log(b.value);
a.value = 35;
console.log(b.value);
// console.log(a)