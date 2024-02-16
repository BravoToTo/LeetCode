/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let lowStr = low.toString();
    let highStr = high.toString();
    const allDigits = [];
    const window = '123456789';
    for (let i = lowStr.length; i <= highStr.length; i++) {
        for (let j = 0; j <= window.length - i; j++) {
            const seq = Number(window.slice(j, j + i));
            if (seq <= high && seq >= low) {
                allDigits.push(Number(window.slice(j, j + i)));
            };
        };
    };
    return allDigits;
};

const low = 234;
const high = 2314;
const result = sequentialDigits(low, high);
console.log(result);