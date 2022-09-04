function isvalidName(name) {
    if (typeof name === "string" &&
        name.trim().length >= 3
    ) {
        return true;

    }
    return false;
}
function hoursAttended(attended, length) {
    if (typeof attended == "string" &&
        attended.trim() != ""
    ) {
        attended = Number(attended);
    }
    if (
        typeof length == "string" &&
        length.trim() != "") {
        length = Number(length);
    }
    if (typeof attended == "number" &&
        typeof length == "number" &&
        attended >= 0 &&
        length >= 0 &&
        Number.isInteger(attended) &&
        Number.isInteger(length) &&
        attended <= length) {
        return true;
    }
    return false;

}
//tests
console.log(isvalidName("frank") === true);
console.log(hoursAttended(6, 8) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(isvalidName(null) === false);
console.log(isvalidName(false) === false);
console.log(isvalidName(undefined) === false);
console.log(isvalidName("") === false);


