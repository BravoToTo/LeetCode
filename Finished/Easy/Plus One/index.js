/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let right = digits.length - 1;
    if (digits[right] !== 9)
        digits[right]++;
    else {
        digits[right] = 0;
        while (--right >= 0) {
            if (++digits[right] !== 10)
                return digits;
            else
                digits[right] = 0;
        };
        digits.unshift(1);
    };
    return digits;
};

const digits = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
const result = plusOne(digits);
console.log(result);