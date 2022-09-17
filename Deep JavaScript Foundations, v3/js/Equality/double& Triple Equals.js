// double equals
var x = 10;
var y = "10";
if (x == y) {
    console.log(true);
}
else {
    console.log(false);

}
//triple equals is used for types match
if (x == !Number(y)) {
    console.log(true);
}
else {
    console.log(false);

}

function triple_equal(firstnum, secondnum) {
    if (firstnum === secondnum) {
        return "yes it is equal";
    }
    return "no it is not equa1;"
}
console.log(triple_equal(2, [2]));
console.log(triple_equal(2, "2"));
console.log(triple_equal(2, Number(2)));
console.log(triple_equal(2, 2))
var a = 0;
var b = -0;
if (a === b) {
    console.log(true);
}
else {
    console.log(false);

}

