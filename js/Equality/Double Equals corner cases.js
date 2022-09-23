// [] == ![] {array and negation array}
var workshop1 = [];
var workshop2 = [];
function workshop() {
    if (workshop1 == !workshop2) {
        return "yep";
    }{
    return "Nope";
    }}
    function workshop3(){
    if (workshop1 != workshop2) {
        return true;
    }
    return false;
}
console.log(workshop());
console.log(workshop3());
// algorithm
// [] == false --> true
// [] == "" --> true
// "" == false --> true
// 0 == false --> true
// 0 === 0  --> true