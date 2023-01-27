var name = "sdfk";

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
        student: "broe"
    };
    ask.call(mycontext, "what")
    ask.call(mycontext, "sorry")

}

otherclass();
// ask("hello")
// ask.call(mycontext,"sorry")


// ----------------------------------------
let person1 = {
    name: "John"
};
let otherPerson = {
    name: "Jane",
    sayName() {
        console.log(this.name);
    }
}

function sayName1 (){

    console.log(this.name)
}
// sayName1.bind(otherPerson); // it will not work using bind this way
// sayName1(); // undefined  // for bind we call function expression but not for call and apply if we write bind to the end of the function  expression
sayName1.call(person1);
sayName1.apply(person1);
// setTimeout( otherPerson.sayName.bind(person)); // we can access any object using bind when we linked that personal object(otherperson) to method while calling. -- see 40 line

// setTimeoṇut( otherPerson.sayName.call(person1)); // invalid callback function recieved undefined

function binding(){
    console.log(this.name);
}
binding();  // calling global scope


