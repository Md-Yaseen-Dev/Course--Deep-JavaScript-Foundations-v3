var x = 16;
var y= Number("16");
var z = y.valueOf();

if (x === z) {
    console.log(true);
}
else {
    console.log(false);
}

if (Number(x) == Number(z)) {
    console.log(true);
}
else {
    console.log(false);
}