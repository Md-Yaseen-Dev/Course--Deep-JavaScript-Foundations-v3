var numstudents = 12;
console.log(`there are ${[numstudents].join("")} students.`);
// using fundamental string
console.log(`there are ${String(numstudents)} students.`);
// using function coercion
function add_student(numstudents) {
    return numstudents + 1;
}
//studentsInputElem.value
var studentsInputElem = 16;
var b = add_student(+studentsInputElem);
console.log(b);
//