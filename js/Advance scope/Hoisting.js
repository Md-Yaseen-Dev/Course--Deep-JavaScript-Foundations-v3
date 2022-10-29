var student
var teacher;

student;
teacher;
console.log(student);
student = "you";
console.log(student);


// function hoisting

function teacher(){
    return "kyle";
}
// var otherTeacher;
teacher();
// otherTeacher();

const otherTeacher = function (){
    return "suzy";
};


// let doesn't  hositing

{
    // teacher = "kyle" // cannot intialize before declared 
    let teacher;
    teacher ="kyle";
console.log(teacher);// refference Error: cannot access teacher before intialization.

}



// here it works because it is in var

a =10;
var a;
console.log(a)


// same as above but let is declared
// b = 20;
// let b; 
// console.log(b);