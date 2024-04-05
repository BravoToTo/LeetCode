/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];
    for (const char of s) {
        if (stack.length > 0 && stack[stack.length - 1].toUpperCase() === char.toUpperCase() && stack[stack.length - 1] !== char)
            stack.pop();
        else
            stack.push(char);
    };
    return stack.join('');
};

const s = "kkdsFuqUfSDKK"
const result = makeGood(s);
console.log(result);