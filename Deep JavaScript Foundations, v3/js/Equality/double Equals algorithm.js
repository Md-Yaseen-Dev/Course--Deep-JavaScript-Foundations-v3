var workshop2Elem = {
    value: 16
}
console.log(workshop2Elem.value)
var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;
if (Number(workshopEnrollment1) === Number(workshopEnrollment2)) {
    console.log(true
    )
}
// it is false even strings types are same  but its not ever invoke coercion.
// coercion means string and number compared to each other
function double_equal() {
    if ("3.7" == "3.o7") {
        return "yes";
    }
    else {
        return "no";
    }
}
console.log(double_equal())

var x = "happy";
var y = {
    value: "happy",

    [Symbol.toPrimitive](hint) {
        return hint == "string" ? `{ name: "${this.value}" }` : "nothing"
    }
}
console.log(y)
// var hint ="yaseen";
// if(Symbol()[Symbol.toPrimitive](hint)){
//     console.log("got it");
// }
var x = 1;
// var y =10;


let obj = {
    value: 30,
}
var app1 = "30";
var app2 = obj.value;
if (app1 == app2) {
    console.log(true);
}
else{
    console.log(false);
}
let app = (app2 === Number(app1)) ? "yes": "no" ;
console.log(app);