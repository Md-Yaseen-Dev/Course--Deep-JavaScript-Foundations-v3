// javascript objects are containers for named values clled properties. Object mehtod object can also have methods. Methods are action that can be performed.

// Example

var object = {
   name:"yaseen",
   age:21,

}
console.log(object)

var x  = "yaseen"

function outerfunc(){
     console.log(x); // doubt
    // var x = "aaqib"
    // console.log(x);

}
outerfunc();
console.log(x);

// 
var x = 10 ;
var y = 10;

if(x===y){
    console.log(true);
}
else{
    console.log(false);
}

// since object are not equal 
var a ={
     num :10,
}
var b ={
    num :20,
}
if(a===b){
    console.log(true);

}
else{
    console.log(false);
}
// deletling a property
console.log(delete a.num);
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
myfunc();