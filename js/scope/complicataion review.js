var teacher ="kyle";
var student = "shadoe"
function otherclass(){
    teacher = "sazy";
    var student = "simmon"
    topic ="react";
    console.log("welcome");
    console.log(student)
}
otherclass();
console.log(teacher);
console.log(topic)
// ohh here teacher is not decalred so it gave output from the function. 

//  if we declare a variable it takes form global scope 
console.log(student)