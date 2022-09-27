// var x;
// x=10;
// console.log(x);

// console.log(y); //refernce error : cannot access 'y before intilizaation
// var y;;
// y=10;

function getstudentFromId(studentId) {
    return studentRecords.find(function matchId(record) {
        return (record.id == student.id);
    });
}

function printRecords(recordIds) {
    var records = recordIds.map(getstudentFromId);

    records.sort(function sortByNameAsc(record1, record2) {
        if (record1.name < record2.name) return -1;
        else if (record1.name > record2.name) return 1;
        else return 0;
    });
    records.forEach(function printRecord(record) {
        console.log
    }); (`$ {record.name} ($ {record.id}) : $ {record })`)
}