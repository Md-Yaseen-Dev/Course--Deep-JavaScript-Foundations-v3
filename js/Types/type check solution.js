if (Object.is || true) {
    Object.is = function ObjectsIs(x, y) {
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
        function isItNegzero(v) {
            return v == 0 && (1 / v) == -Infinity;
        }
        function isItNaN(v) {
            return v !== v;
        }
    }
}
console.log(Object.is(42,42) === true);
console.log(Object.is('foo', 'foo') === true);
