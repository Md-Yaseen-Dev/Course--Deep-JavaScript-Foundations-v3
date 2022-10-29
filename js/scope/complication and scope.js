// ../complication and scope....
var teacher = "shaik";
function otherclass(){
    var teacher = "roshan";
    console.log("welcome!" + " " + teacher)
}
function ask(){
    var question = "why?";
    console.log(question)
}
otherclass();
ask();