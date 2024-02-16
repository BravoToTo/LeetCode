/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function (s, target) {
    if (s === target) return true;

    const allZeros = '0'.repeat(s.length);
    if (s === allZeros || target === allZeros) return false;

    return true;
};

/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual2 = function (s, target) {
    return !(s.includes("1") ^ target.includes("1"));
};

const s = '1010';
const target = '0110'

const result = makeStringsEqual2(s, target);
console.log(result);
