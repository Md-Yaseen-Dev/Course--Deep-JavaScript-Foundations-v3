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

// ToPrimitive
// If we have non primitive type like function, object array and we need a primitive equivalent


// Every Non-= primitive can have two methods abailable toString and valueOf. 

// If 'number' hint is sent, valueof() method is invoked first. and if we get a primitive type from the reuslt then we are done. But if the result is again a non primitive, toString gets invoked.

// hint : "Number"

// valueof();
// toString();

// if "string " hint is sent, toString() method is invoked first and if we get a primitive type form the result then we are done. But if the result is agian a  non primitive, valueOf() gets invoked.

// toString();
// valueOf();


//  Example
var ToPrimitive = [""];
console.log(ToPrimitive);
console.log([""].valueOf());// here still it is non primitive
var x  = ToPrimitive.toString();
console.log(x); // here showing error why ??
// non primitve string



