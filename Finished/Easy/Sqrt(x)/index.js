/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;

    let value = 1;
    while (value*value <= x) {
        value++;
    }
    value--;
    return value;
};

let test = 123456789
console.log(mySqrt(test));