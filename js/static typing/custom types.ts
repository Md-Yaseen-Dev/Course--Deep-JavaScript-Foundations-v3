type student ={ name: string };
function getName(studentsRec: student) {
    return studentsRec.name;
}
var firststudent: student = { name: "frank" };
var firststudentName: string = getName(firststudent)
console.log(getName);