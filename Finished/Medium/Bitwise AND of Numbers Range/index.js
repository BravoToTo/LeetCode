/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
    // if (right === left) return left; // Not needed, but can optimize runtime a bit.
    const rightStr = right.toString(2);
    let leftStr = left.toString(2);
    leftStr = '0'.repeat(rightStr.length - leftStr.length) + leftStr;

    if (rightStr[0] !== leftStr[0]) return 0;

    let result = rightStr[0];
    for (let i = 1; i < rightStr.length; i++) {
        if (rightStr[i] === leftStr[i])
            result += rightStr[i];
        else {
            result += '0'.repeat(rightStr.length - i);
            break;
        }
    };
    return Number.parseInt(result, 2);
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd2 = function (left, right) {
    let shiftCount = 0;
    while (left !== right) {
        left >>= 1;
        right >>= 1;
        shiftCount++;
    };
    return right << shiftCount;
};

const left = 5;
const right = 7;
const result = rangeBitwiseAnd(left, right);
console.log(result);

const result2 = rangeBitwiseAnd2(left, right);
console.log(result2);