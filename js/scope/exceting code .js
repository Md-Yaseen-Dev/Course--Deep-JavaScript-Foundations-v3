// -------executing code-------

var teacher = "kyle";
function otherclass() {
    // var teacher = "suzy";
    console.log(teacher);
    console.log("welcome!0");
}

function ask() {
    var question = "why?";
    console.log(question);
}
otherclass();
// console.log(teacher);
ask();
// console.log(question);
// with same variables in different function
function bar() {
    let day = 0;
console.log(day);
}
function bay() {
    let day = 1;
console.log(day);
}

bar();
bay();