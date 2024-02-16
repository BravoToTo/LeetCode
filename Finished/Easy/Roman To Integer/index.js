/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (((s[i] === 'X' || s[i] === 'V') && s[i - 1] === 'I') || ((s[i] === 'L' || s[i] === 'C') && s[i - 1] === 'X') || ((s[i] === 'D' || s[i] === 'M') && s[i - 1] === 'C')) {
            result += romanMap.get(s[i]) - romanMap.get(s[i - 1]);
            i--;
        } else
            result += romanMap.get(s[i])
    };
    return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function (s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanMap.get(s[i]) < romanMap.get(s[i + 1]))
            result -= romanMap.get(s[i])
        else
            result += romanMap.get(s[i])
    };
    return result;
};

const s = "MCMXCIV";
const result = romanToInt(s);
console.log(result);

const result2 = romanToInt2(s);
console.log(result2);