// javascript objects are containers for named values called properties. Object method object can also have methods. Methods are action that can be performed.
// Example

var object = {
   name:"yaseen",
   age:21,

}
console.log(object)

var s  = {
   x : "yaseen",
}

function outerfunc(){
     console.log(s) // doubt -- it is hosting (if we dont assign a variable in a function , it access  a variable from global scope otherwise it shows undefined , if u REassign in a function.)

    var x = {name :"aaqib"}
    console.log(x);
    console.log(this.name );//why i did nt  understand

}
outerfunc();
// console.log(x);

// 
var x = 10 ;
var y = 10;

if(x===y){
    console.log("values are equal " + true);
}
else{
    console.log(false);
}

// since object are not equal . if the
var a ={
     num :10,
}
var b ={
    num :20,
}

if(a===b){
    console.log(  true);

}
else{
    console.log("the object are not equal  so it is: " + false);
}
// deletling a property
console.log(delete a.num);
console.log(b);
console.log(a);

// console.log(a.num);

// console.log(num in b);

// for ex ample closoure

var sub  = "apps"

function makefunc(){
    console.log(sub);

    function innefunc(){
    var sub ="paps";
    console.log(sub);
}
return innefunc;
}

// console.log(makefunc());
const myfunc = makefunc();
myfunc();  //  it is closure it remembers  even outer of lexical scope 


let xtra = this;
console.log(xtra);