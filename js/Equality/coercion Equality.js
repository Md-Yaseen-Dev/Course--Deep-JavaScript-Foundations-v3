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