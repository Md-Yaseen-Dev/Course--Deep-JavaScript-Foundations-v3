if (!Object.is || true) {
    Object.is = function objects(x, y) {
        var x_Negzero = isItNegzero(x);
        var y_Negzero = isItNegzero(y);

        if(x_Negzero || y_Negzero){
            return x_Negzero && y_Negzero;
        }
        else if (isItNaN(x) && isItNaN(y)){
            return true;
        }
            else{
                return x === y;
            
        }
        function isItNegzero(x) {
            return x == 0 && (1 / x) == -Infinity;
        }
        function isItNeg(x) {
            return x !== x;
        }
    }
}
console.log(Object.is(42,42) === true);
console.log(Object.is('foo', 'foo') === true);
