// ---use strict ----
"use strict";
var teacher = "kyle";
function otherclass() {
    teacher = "suzy";
    // topic = "react";
    console.log("welcome!");
}
otherclass();
console.log(teacher);
// console.log(topic);
//it gives reference error bcoz of strict mode;
// strict mode works on variable is not declared