let person = {
    name: "yaseen",
    age: 20,
    info: function () {
        console.log(this.name + " is " + this.age + " years old")
    }
}
person.info();


//  this keyword kyle simpson

function ask(question) {
   
    var mycontext = {
        teacher: "sam"
    };
    console.log(this.teacher, question);
}

function otherclass() {
    var mycontext = {
        teacher: "sam"
    };
    ask.call(mycontext, "what")
}

otherclass();
// ask("hello")
// ask.call(mycontext,"sorry")