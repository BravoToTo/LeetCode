/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    const result = Math.sqrt(n * (n + 1) / 2);
    return Number.isInteger(result) ? result : -1;
};

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger2 = function (n) {
    const result = Math.sqrt(n * (n + 1) / 2);
    return result % 1 === 0 ? result : -1;
};

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger3 = function (n) {
    let sumLeft = 0, sumRight = n * (n + 1) / 2;
    for (let i = 1; i <= n; i++) {
        sumLeft += i;
        if (sumLeft === sumRight) return i;
        sumRight -= i;
    };
    return -1;
};

const n = 2;
const result = pivotInteger(n);
console.log(result);