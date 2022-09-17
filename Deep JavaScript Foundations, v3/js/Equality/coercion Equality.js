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