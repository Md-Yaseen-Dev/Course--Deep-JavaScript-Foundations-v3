// the first abstract operation have is called TOPrimitive
// toprimitive property is used as a fucntion value , an object can be converted to a primitive value\ 
const object1 = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 42;
        }
        if (hint === 'string') {
            return "it is string";
        }
        return null;
    }
};
console.log(+object1);
console.log("object1");
console.log(object1.toString());
console.log(object1.valueOf());
