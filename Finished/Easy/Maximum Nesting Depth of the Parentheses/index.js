/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let max = 0, counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(')
            max = Math.max(max, ++counter);
        else if (s[i] === ')') counter--;
    };
    return max;
};

const s = "(1+(2*3)+((8)/4))+1";
const result = maxDepth(s);
console.log(result);