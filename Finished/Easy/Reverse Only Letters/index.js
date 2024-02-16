/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let left = 0
    let right = s.length - 1;
    s = s.split('');
    while (left < right) {
        if (s[left].match(/[a-zA-Z]/g) === null) {
            left++;
            continue;
        }
        if (s[right].match(/[a-zA-Z]/g) === null) {
            right--;
            continue;
        }
        const leftReplace = s[right];
        s[right] = s[left];
        s[left] = leftReplace
        left++;
        right--;
    };
    return s.join('');
};

const s = "Test1ng-Leet=code-Q!"
const result = reverseOnlyLetters(s);

console.log("Result =", result);