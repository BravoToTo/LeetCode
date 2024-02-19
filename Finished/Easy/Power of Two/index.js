/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    // return Number.isInteger(Math.log2(n));
    // return Math.log2(n) % 1 === 0;
    return n > 0 ? !(n & n - 1) : false;
};

const n = 16;
const result = isPowerOfTwo(n);
console.log(result);