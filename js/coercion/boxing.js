// boxing is the process in which a primitive value is wrapped in an Object

// if(studentNameElem.value.length > 50){
//     console.log('students name is too long')
// }
//-------manual boxing
let flag1 = new Boolean(true);
if (flag1) {
    console.log['inside flag1']
}
let flag2 = new Boolean(false)
if (!flag2) {
    console.log("inside flag2");
}
let flag3 = Object(false)
if (!flag3) {
    console.log("inside flag3");
}
//unboxing change object wrapper to primitive data types
// let flag = Object(false);
// console.log(flag == false)
// console.log(flag === false)
// console.log(flag.valueOf() == false)
// console.log(flag.valueOf() === false)