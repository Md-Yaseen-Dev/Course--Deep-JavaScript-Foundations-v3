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
function double_equal(){
if ("3.7" == "3.o7") {
 return "yes";
}
else{
   return "no";
}
}
console.log(double_equal())