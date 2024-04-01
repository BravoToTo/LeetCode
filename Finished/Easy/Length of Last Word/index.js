/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const arr = s.trimEnd().split(' ');
    return arr[arr.length - 1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function (s) {
    return s.trimEnd().split(' ').pop().length;
};

const s = "Hello World";
const result = lengthOfLastWord(s);
console.log(result);