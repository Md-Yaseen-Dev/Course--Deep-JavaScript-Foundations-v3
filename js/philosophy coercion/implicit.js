var numstudents = "35";
console.log(`there are  students`)
console.log(typeof numstudents);

console.log(`here  ${numstudents} students are there`)

if ("3.7" === "3.o7") {
    console.log(true);
}
else {
    console.log(false);
}

var worskhop10 = 16;;
var workshop20 = "17";
if (worskhop10 < workshop20) {
    console.log("lessthan is :" + true);//this is implict coercion
}
else {
    console.log(false);
}
if (Number(worskhop10 < workshop20)) {
    console.log("Number lessthan is also:" + true);
}
else {
    console.log(false);
}

