// some of the corner cases
console.log(Number(""));
console.log(Number("\t\n"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number([]));
console.log(Number([1, 2, 3]));
console.log(Number([null]));
console.log(Number([undefined]));
console.log(Number({}));

// strings
console.log(String("\n" + -0));
console.log(String(null));
console.log(String(undefined));
console.log(String([null]));
console.log(String([undefined]));//
// Number
console.log(1 < 2);
console.log(2 < 3);  // this accendiently working
console.log(1 < 2 < 3);

console.log(3 > 2);
console.log(2 > 1);
console.log(3 > 2 > 1);
console.log(3 > 2) > 1; //so worse code need know
console.log(true) > 1;
console.log(1 > 1);
// root of all(coercion)
var studentsInput = {
    value: 0
}
studentsInput.value = "";
console.log(studentsInput.value);
var b = console.log(Number(studentsInput.value));
console.log(typeof (studentsInput.value));
