/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let count = 0;
    var countPalindrome = function (left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
            count++;
        };
    };

    for (let i = 0; i < s.length; i++) {
        countPalindrome(i, i);
        countPalindrome(i, i + 1);
    };

    return count;
};

const s = "aaa";
const result = countSubstrings(s);
console.log(result);
