function setsmatch(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)){
        for (let v of arr1) {
            if (!arr2.includes(v)) return false;
        }
        return true;
    }
    
    return false;
}



function findall(match, arr) {
    var ret = [];
    for (let v of arr) {
        if (Object.is(match, v)) {
            ret.push(v);
        }
        else if (match == null && v == null) {
            ret.push(v);
        }
        else if (typeof match == "boolean" && typeof v == "boolean") {
            if (match == v) {
                ret.push(v);
            }
        }
        else if (typeof match == "string" && match.trim() != "" && typeof "number" && Object.is(v, -0)) {
            if (match == v) {
                ret.push(v);
            }

        } else if (typeof match == "number" &&
            !Object.is(match, -0) &&
            !Object.is(match, NaN) &&
            !Object.is(match, Infinity) &&
            !Object.is(match, -Infinity) &&
            typeof v == "string" &&
            v.trim() != "") {

        }


    }
    return ret;

}
//tests
var myObj = { a: 3 };
var values = [
    , , -0, 0, 14, 42, NaN, -Infinity, Infinity,
    "", "0", "-0", "42", "42hello", "ture", "NaN", true, false, myObj
];
// console.log(setsmatch(findall(null, values), [null, undefined]) === true);
// console.log(setsmatch(findall(undefined, values), [undefined, null]) === true);
console.log(setsmatch(findall(0, values), [0, "0"]) === true);
console.log(setsmatch(findall(-0, values), [0]) === true);
console.log(setsmatch(findall(14, values), [14]) === true);
console.log(setsmatch(findall(42, values), [42, "42"]) === true);
console.log(setsmatch(findall(NaN, values), [NaN]) === true);
console.log(setsmatch(findall(-Infinity, values), [-Infinity]) === true);
console.log(setsmatch(findall(Infinity, values), [Infinity]) === true);
console.log(setsmatch(findall("", values), ["",]) === true);
console.log(setsmatch(findall("0", values), [0,"0"]) === true);
console.log(setsmatch(findall("42", values), [42,"42"]) === true);
console.log(setsmatch(findall(true, values), [true]) === true);
console.log(setsmatch(findall(false, values), [false]) === true);
console.log(setsmatch(findall(myObj, values), [myObj]) === true);
console.log(setsmatch(findall(null, values), [null,0]) === false);
