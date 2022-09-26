// kyle simpson says you should not even use let and you should only use const wherever possible.
// so the problem with the const is essentially te const keyword doesn't carry its own weight within the language.

// Every time the const keyword has ever been
// added to any programming language, programmers got confused.
// the reason they get confused, is because when we think of const, and we think of the word Constant. doesn't change.
// // But that's not what a programmer means by const.
// A programming language designer means a variable that can't be reassigned.

var teacher = "suzy";
teacher = "kyle";

const myTeacher = teacher;
// myTeacher = "suzm";  // getting typeerror for assign

const teachers = ["kyle", "suzi"];
teachers[1] = "braine"; // but here assigning its working

console.log(teacher);
console.log(teachers);
console.log(myTeacher);


//mutable value and mutable assignments

//kyle simpson use const with things like strings, booleans or numbers
// also you can use for API URl