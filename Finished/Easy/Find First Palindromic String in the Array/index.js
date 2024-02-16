/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].split('').reverse().join('') === words[i]) return words[i];
    };
    return '';
};

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome2 = function (words) {
    for (let i = 0; i < words.length; i++) {
        let isPalindrome = true;
        for (let j = 0; j < words[i].length / 2; j++) {
            if (words[i][j] !== words[i][words[i].length - 1 - j]) {
                isPalindrome = false;
                break;
            };
        };
        if (isPalindrome) return words[i];
    };
    return '';
};

const words = ["abc", "car", "ada", "racecar", "cool"];
const result = firstPalindrome(words);
console.log(result);

const result2 = firstPalindrome2(words);
console.log(result2);