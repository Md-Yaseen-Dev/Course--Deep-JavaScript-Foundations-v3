var numstudents = 8;
console.log(`there are ${[numstudents].join("")} students.`);//domt do that it is terible idea
console.log(`there are ${numstudents + ""} teachers`);

//either one of them is a string it returns in a string concatenation


// using fundamental string
console.log(`there are ${String(numstudents)} players.`);
// using function coercion
function add_student(numstudents) {
    return numstudents + 1;
}
var studentsInputElem = "16";
var b = add_student(studentsInputElem);
console.log(b);
console.log(add_student(89));
// - operator
function kick_student(numstudents) {
    return numstudents - 1;
}
console.log(kick_student(25));

var newstudents = [3, 4];
while (newstudents.length > 0) {
    console.log(kick_student(newstudents.pop()))
}

///---new

function addstudents(numstudent) {
    return numstudent + 1
}

console.log(addstudents("16")); // "161"
console.log(addstudents(+"16")); // 17



// the unary plus operator if you look in the spec for it that the two number abstract operation occurs

