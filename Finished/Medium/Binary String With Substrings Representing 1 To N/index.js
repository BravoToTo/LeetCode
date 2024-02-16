/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
    for (let i = n; i >= 1; i--) {
        if (s.search(i.toString(2)) === -1) {
            return false;
        };
    };
    return true;
};

let s = '011010101010111101010101011111111111111111111111111111111110000000000000011111101010101001010101010101010101010101111010101010111111111111111111111111111111111100000000000000111111010101010010101010101010101010100';
let n = 1000000000;

console.log(queryString(s, n));
