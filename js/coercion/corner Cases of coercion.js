// some of the corner cases
console.log(Number(""));
console.log(Number("\t\n"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number([]));
console.log(Number([1,2,3]));
console.log(Number([null]));
console.log(Number([undefined]));
console.log(Number({}));

// strings
console.log( String("\n" + -0));
console.log( String(null));
console.log( String(undefined));
console.log( String([null]));
console.log( String([undefined]));


