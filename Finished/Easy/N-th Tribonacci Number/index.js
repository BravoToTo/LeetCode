/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let n0 = 0;
    let n1 = 1;
    let n2 = 1;
    let result;
    for (let i = 3; i <= n; i++) {
        result = n2 + n1 + n0;
        n0 = n1;
        n1 = n2;
        n2 = result;
    };
    return result;
};

const n = 25;
const result = tribonacci(n);
console.log(result);