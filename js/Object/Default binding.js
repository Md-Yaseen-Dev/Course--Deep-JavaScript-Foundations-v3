var teacher = "kyle";

function ask(question) {
    console.log(this.teacher, question);
};
function askAgain() {
    "use strict";
    console.log(this.teacher, question);
}
ask("what is the non-strict mode default");
// askAgain("what is the strict mode default");// typeError
