function getstudentById(studentId) {
    return studentsRecords.find(function matchId(record) {
        return (record.id == studentId);
    })
}
function printRecord(recordIds) {
    var records = recordIds.map(getstudentById);
    records.sort(function sortByNameAsc(record1,
        record2) {
        if (record1.name < record2.name) {
            return -1;
        }
        else if (record1.name > record2.name) {
            return 1;
        }
        else {
            return 0;
        }
    });
    records.forEach(function printRecord(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "paid" : "Not paid"}`)
    })
}
function paidstudentsToenroll() {
    var idsToEnroll = studentsRecords.filter(function needsToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id))
    })
        .map(function getstudentId(record) {
            return record.id;
        });
    return [...currentEnrollment, ...idsToEnroll]
}
function remainunpaid(recordsIds) {
    var unpaidIds = recordsIds.filter(function isUnpaid(studentsId) {
        var record = getstudentById(studentsId);
        return !record.paid;
    });
    printRecord(unpaidIds);
}

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
remainunpaid(currentEnrollment);
