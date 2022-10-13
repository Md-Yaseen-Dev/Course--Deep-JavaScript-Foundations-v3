//  Closing Over variable

var student = "sams";
var myStudent = function () {
    console.log(student);
};

student = "samy";

myStudent();

// i have doubt on var and let how that works below.

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log("i : " + i)
    }, i * 500);
}


// Note :- The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

for (var i = 1; i<= 3; i++) {
    let j =i ;
    setTimeout(function(){
        console.log(`j:${j} `)
    }, j*2000)

}