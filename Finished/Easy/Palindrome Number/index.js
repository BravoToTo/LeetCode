/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return x.toString().split('').reverse().join('') === x.toString();
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeMath = function (x) {
    let reversed = 0;
    let copy = x;

    while (copy > 0) {
        const lastDigit = copy % 10;
        reversed = reversed * 10 + lastDigit;
        copy = ~~(copy / 10);
    };
    return x === reversed
};

const x = 121;
const result = isPalindrome(x);
console.log(result);

const result2 = isPalindromeMath(x);
console.log(result2);