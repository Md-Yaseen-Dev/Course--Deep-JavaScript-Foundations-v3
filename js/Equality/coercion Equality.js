// coercion equality
var c = null;
var d = undefined;
if (c == d) {
    console.log("null and undefined are true");
}
else {
    console.log("null and undefined are false");
}
// it is a loose equality
if (2 == true) {
    console.log("2 is equal to true");
}
else {
    console.log("2 is not equal to true");
}
if (1 == true) {
    console.log("1 is equal to true");
}
else {
    console.log("1 is not equal to true");
}


var workshop = { topic: null };
var workshop4 = {}; // {topic :10}

if (workshop.topic === null || workshop.topic === undefined) {
    console.log(true)
}
if (workshop4.topic === null || workshop4.topic === undefined) {
    console.log(true)
}
else {
    console.log(false)
}
// coercion comparsion
if (workshop.topic == null && workshop4.topic == null) {
    console.log("yes");
}
else {
    console.log("NO");
}


// here i have a doubt of strict equality

var x = 0;
var y = - 0;
if (x === y) {
    console.log(true);
}
else {
    console.log(false)
};

var c = 1;
var d = -1;
console.log(typeof c);
console.log(typeof d);
function equality(){
if (c === d){
    return true;
}
else{
    return false ;


}
}
var e = equality();
console.log(e);

// two objects cannot be equal , if they have same value

var obj1 = {
    name : "india"
}
var obj2 = {
    name : "india"
}

if(obj1 === obj2){
    console.log(true);
}
else
{
    console.log(false);
}

// note 
// == checks the value . and allows coericion
//==== checks the value and type , it doesn't allow the coericion