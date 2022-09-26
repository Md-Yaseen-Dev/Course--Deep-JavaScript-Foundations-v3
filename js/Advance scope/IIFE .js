// IIFE (immediate invoked function Expression)

(function () {
    console.log("hello yaseen ");
})
    ();


// Another Example
var teacher = "kyle";
(function anotherTeacher() {
    var teacher = "suzy";
    console.log(teacher);
})();
console.log(teacher);


(function(teacher){
    console.log(teacher);
  })("robart")



// here above it is not a function declaration.  Because the word function is not the first thing in the statement.

//  In other words, those parenthesis are there literally for no other purpose than tp syntactically turn that into an expression instead of a declaration. There are a variety of other syntactic ways to turn a function into an expression.


// Also we can use unary operators such as given below :-

var IIFEfunc = +function (a, b) {
    return a;
}(5);
console.log(IIFEfunc);

var IIFEfunc = -function (a, b) {
    return a;
} (5);
console.log(IIFEfunc); 

var IIFEfunc = ~function (a, b) {
    return a;
} (5);
console.log(IIFEfunc); 


var IIFEfunc = !function (a, b) {
    return a;
} (5);
console.log(IIFEfunc); 

// So, is there real-world use case for such IIFE or we should avoid using IIFE by using unary Operator and just use real IIFE;


// Also we can use for TRY and CATCH exceptions

var teacher;
try {
   teacher =fetchTeacher(1)
}
catch(err){
teacher ="james"
};
console.log(teacher);

// IIFE with try and catch

var teacher= (function getTeacher(){ ;
    try {
       return fetchTeacher(1);
    }
    catch(err){
    return"sams"
    }
    })();
console.log(teacher);
