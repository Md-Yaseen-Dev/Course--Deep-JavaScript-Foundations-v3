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
   
    // var mycontext = {
    //     teacher: "sam",   // i think it will be not required
    // };                  
    console.log(this.student, question);
}

function otherclass() {
    var mycontext = {
        teacher: "sam",
        student : "broe"
    };
    ask.call(mycontext, "what")
    ask.call(mycontext,"sorry")

}

otherclass();
// ask("hello")
// ask.call(mycontext,"sorry")