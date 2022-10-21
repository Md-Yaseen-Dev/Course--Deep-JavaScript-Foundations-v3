function ask(question){
    console.log(this.teacher,question);
}

var newEmptyObject = new ask ("what is new doing here ?");

// 1. create a brand new empty object
// 2. link that object to another object.
// 3. call function with this set to the new object
// 4. if function does not return an object assume return of this