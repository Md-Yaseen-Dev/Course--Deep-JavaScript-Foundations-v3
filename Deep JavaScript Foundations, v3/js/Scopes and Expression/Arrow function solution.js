var getstudentById = studentId =>
    studentsRecords.find(
        record => record.id == studentId
    );
var printRecord = recordsIds => recordsIds.map(getstudentById)
    .sort(
        (record1, record2) => (record1.name < record2.name) ? -1 : (record1.name > record2.name) ? 1 : 0
    )
    .forEach(
        record => 
            console.log(`${record.name} (${record.id}): ${record.paid ? "paid" : "Not paid"}`)
    );

var paidstudentsToenroll = () => [
    ...currentEnrollment,
    ...(
        studentsRecords.filter(record => (record.paid && !currentEnrollment.includes(record.id))
        )
            .map(record => record.id)
    )
];

var remainpaid = recordsIds => printRecord(
    recordsIds.filter(
        studentId => getstudentById(studentId).paid
    )
);
var remainunpaid1 = recordsIds => printRecord(
    recordsIds.filter(
        studentId => !getstudentById(studentId).paid
    )
);

var currentEnrollment = [410, 105, 664, 375];

var studentsRecords = [

    { id: 313, name: "roshan", paid: true },
    { id: 410, name: "yaseen", paid: true },
    { id: 709, name: "Rashid", paid: false },
    { id: 105, name: "sarfraz", paid: false },
    { id: 502, name: "saleh majeed", paid: true },
    { id: 664, name: "Asif khan", paid: false },
    { id: 258, name: "waheed", paid: true },
    { id: 375, name: "fazil", paid: true },
    { id: 876, name: "Aaqib", paid: false },

]
printRecord(currentEnrollment);
console.log(".....");
currentEnrollment = paidstudentsToenroll();
printRecord(currentEnrollment);
console.log("....");
remainpaid(currentEnrollment);
console.log("------");
remainunpaid1(currentEnrollment);
