/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    const splitted = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') stack.push(i);
        else if (s[i] === ')') {
            if (stack.length === 0) splitted[i] = '';
            else stack.pop();
        };
    };

    for (const char of stack)
        splitted[char] = ''

    return splitted.join('')
};

const s = "))((";
const result = minRemoveToMakeValid(s);
console.log(result);